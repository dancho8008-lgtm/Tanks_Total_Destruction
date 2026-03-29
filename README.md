# Tanks Total Destruction

`Tanks Total Destruction` is a browser tank game built with plain `HTML`, `CSS`, and `JavaScript`.
The player chooses a faction, selects a tank model, and enters battle in one of several game modes.

## Features

- faction choice: `Germany` or `USSR`
- multiple tank models with different `speed`, `attack`, `defense`, and `health`
- `Singleplayer`, `Local VS`, and `Online VS`
- optional allied tank
- enemy waves, destructible buildings, and battlefield obstacles
- collectible power-ups: shield, mines, health, rapid fire, speed boost, double damage, and invulnerability
- rotating battlefield backgrounds
- sound effects for shooting, explosions, and battle ambience
- mobile-friendly controls

## Run Locally

No installation is required.
Open `index.html` in a browser.

## Controls

### Singleplayer and Online VS

- `Arrow keys` to move
- `Space` to shoot
- `E` to place a mine

### Local VS

- Player 1: `W`, `A`, `S`, `D` + `Space`
- Player 2: `Arrow keys` + `Enter`

## Online Mode

Online matches use a manual `peer-to-peer` connection flow:

1. One player chooses `Host`.
2. The other player chooses `Join`.
3. The players exchange connection codes.
4. The host starts the match.

## Project Structure

```text
tanks/
|- index.html
|- styles.css
|- script.js
|- README.md
|- assets/
|  |- backgrounds/
|  |  |- battlefields/
|  |  `- menu/
|  |- sounds/
|  `- tanks/
|     |- reference/
|     `- transparent/
`- tools/
```

## Main Files

- [index.html](E:\codex project\tanks\index.html): app structure and menus
- [styles.css](E:\codex project\tanks\styles.css): visual style and responsive layout
- [script.js](E:\codex project\tanks\script.js): gameplay, UI logic, AI, power-ups, and multiplayer flow
- [assets/branding/tanks-total-destruction-icon.svg](E:\codex project\tanks\assets\branding\tanks-total-destruction-icon.svg): main icon and browser tab branding
- [assets](E:\codex project\tanks\assets): game resources such as backgrounds, sounds, and tank images
- [tools](E:\codex project\tanks\tools): helper scripts and temporary tooling files

## Asset Naming

Assets are now organized with clear names and grouped by purpose:

- battlefield images: `assets/backgrounds/battlefields/`
- menu background: `assets/backgrounds/menu/`
- audio files: `assets/sounds/`
- tank reference images: `assets/tanks/reference/`
- transparent tank cutouts: `assets/tanks/transparent/`

This makes the project easier to maintain, upload, and expand.
