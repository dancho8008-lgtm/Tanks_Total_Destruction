Add-Type -AssemblyName System.Drawing

$defaultFiles = @(
  "is 2.jpg",
  "kv 1.jpg",
  "panzer 3.jpg",
  "panzer 4.jpg",
  "panter.png",
  "stug 3.jpg",
  "SU 85.jpg",
  "t 26.jpg",
  "t 34.jpg",
  "t 34.png",
  "tiger 1.jpg",
  "tiger 1.webp",
  "tiger 2.jpg"
)

$files = if ($args.Count -gt 0) { $args } else { $defaultFiles }

function Get-ColorDistanceSq {
  param(
    [System.Drawing.Color]$A,
    [System.Drawing.Color]$B
  )

  $dr = [int]$A.R - [int]$B.R
  $dg = [int]$A.G - [int]$B.G
  $db = [int]$A.B - [int]$B.B
  return ($dr * $dr) + ($dg * $dg) + ($db * $db)
}

function Get-BorderSamples {
  param(
    [System.Drawing.Bitmap]$Bitmap
  )

  $samples = New-Object System.Collections.Generic.List[System.Drawing.Color]
  $width = $Bitmap.Width
  $height = $Bitmap.Height

  for ($x = 0; $x -lt $width; $x += [Math]::Max(1, [int]($width / 24))) {
    $samples.Add($Bitmap.GetPixel($x, 0))
    $samples.Add($Bitmap.GetPixel($x, $height - 1))
  }

  for ($y = 0; $y -lt $height; $y += [Math]::Max(1, [int]($height / 24))) {
    $samples.Add($Bitmap.GetPixel(0, $y))
    $samples.Add($Bitmap.GetPixel($width - 1, $y))
  }

  return $samples
}

function Matches-Background {
  param(
    [System.Drawing.Color]$Pixel,
    [System.Collections.Generic.List[System.Drawing.Color]]$Samples,
    [int]$ToleranceSq
  )

  foreach ($sample in $Samples) {
    if ((Get-ColorDistanceSq $Pixel $sample) -le $ToleranceSq) {
      return $true
    }
  }

  return $false
}

foreach ($file in $files) {
  if (-not (Test-Path $file)) {
    Write-Host "Missing: $file"
    continue
  }

  $source = [System.Drawing.Bitmap]::FromFile((Resolve-Path $file))
  $bitmap = New-Object System.Drawing.Bitmap($source.Width, $source.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.DrawImage($source, 0, 0, $source.Width, $source.Height)
  $graphics.Dispose()
  $source.Dispose()

  $width = $bitmap.Width
  $height = $bitmap.Height
  $visited = New-Object 'bool[,]' $width, $height
  $queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]
  $samples = Get-BorderSamples -Bitmap $bitmap
  $toleranceSq = 55 * 55

  for ($x = 0; $x -lt $width; $x++) {
    $queue.Enqueue([System.Drawing.Point]::new($x, 0))
    $queue.Enqueue([System.Drawing.Point]::new($x, $height - 1))
  }

  for ($y = 0; $y -lt $height; $y++) {
    $queue.Enqueue([System.Drawing.Point]::new(0, $y))
    $queue.Enqueue([System.Drawing.Point]::new($width - 1, $y))
  }

  while ($queue.Count -gt 0) {
    $point = $queue.Dequeue()
    $x = $point.X
    $y = $point.Y

    if ($x -lt 0 -or $y -lt 0 -or $x -ge $width -or $y -ge $height) {
      continue
    }

    if ($visited[$x, $y]) {
      continue
    }

    $visited[$x, $y] = $true
    $pixel = $bitmap.GetPixel($x, $y)

    if (-not (Matches-Background -Pixel $pixel -Samples $samples -ToleranceSq $toleranceSq)) {
      continue
    }

    $bitmap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $pixel.R, $pixel.G, $pixel.B))

    $queue.Enqueue([System.Drawing.Point]::new($x + 1, $y))
    $queue.Enqueue([System.Drawing.Point]::new($x - 1, $y))
    $queue.Enqueue([System.Drawing.Point]::new($x, $y + 1))
    $queue.Enqueue([System.Drawing.Point]::new($x, $y - 1))
  }

  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file)
  $output = Join-Path (Get-Location) ("{0}-transparent.png" -f $baseName)
  $bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
  $bitmap.Dispose()
  Write-Host "Saved: $output"
}
