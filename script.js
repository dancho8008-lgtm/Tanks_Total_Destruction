const factions = {
  germany: {
    name: "Германия",
    intro: "Немските машини са точни, тежки и нанасят силен удар.",
    enemyName: "Руски",
    tanks: [
      {
        id: "panzer-iv",
        name: "Panzer IV",
        type: "Среден танк",
        description: "Балансиран модел с добра скорост и надеждно оръдие.",
        stats: { speed: 2.8, bulletSpeed: 7.5, fireDelay: 330, attack: 20, defense: 12, health: 110, color: "#777466" }
      },
      {
        id: "tiger-i",
        name: "Tiger I",
        type: "Тежък танк",
        description: "По-бавен, но с дебела броня и много силен изстрел.",
        stats: { speed: 2.2, bulletSpeed: 8.1, fireDelay: 460, attack: 30, defense: 24, health: 150, color: "#8b7f57" }
      },
      {
        id: "panther",
        name: "Panther",
        type: "Ловец на танкове",
        description: "Комбинация от мобилност и отлична пробивна сила.",
        stats: { speed: 3.1, bulletSpeed: 8.6, fireDelay: 360, attack: 24, defense: 15, health: 120, color: "#6f7752" }
      },
      {
        id: "stug-iii",
        name: "StuG III",
        type: "Щурмово оръдие",
        description: "Нисък профил, бързо презареждане и добра стрелба между препятствия.",
        stats: { speed: 3.0, bulletSpeed: 8.0, fireDelay: 280, attack: 19, defense: 10, health: 108, color: "#5c604a" }
      },
      {
        id: "tiger-ii",
        name: "Tiger II",
        type: "Свръхтежък танк",
        description: "Много броня и огромна огнева мощ, но е трудно подвижен в тесни зони.",
        stats: { speed: 1.9, bulletSpeed: 8.7, fireDelay: 560, attack: 38, defense: 28, health: 175, color: "#7f7354" }
      },
      {
        id: "pz-iii",
        name: "Panzer III",
        type: "Лек среден танк",
        description: "По-слаб удар, но висока маневреност за заобикаляне на сгради.",
        stats: { speed: 3.5, bulletSpeed: 7.1, fireDelay: 260, attack: 16, defense: 8, health: 98, color: "#6c6c58" }
      }
    ]
  },
  ussr: {
    name: "Русия",
    intro: "Съветските танкове разчитат на агресивен натиск и бързи маневри.",
    enemyName: "Немски",
    tanks: [
      {
        id: "t34",
        name: "T-34",
        type: "Среден танк",
        description: "Бърз и маневрен, идеален за пробив и бърза смяна на позиции.",
        stats: { speed: 3.3, bulletSpeed: 7.3, fireDelay: 320, attack: 18, defense: 11, health: 105, color: "#567046" }
      },
      {
        id: "kv1",
        name: "KV-1",
        type: "Тежък танк",
        description: "Издръжлива броня и стабилна огнева мощ в челна атака.",
        stats: { speed: 2.1, bulletSpeed: 7.1, fireDelay: 430, attack: 29, defense: 25, health: 155, color: "#5c6841" }
      },
      {
        id: "is2",
        name: "IS-2",
        type: "Щурмови тежък танк",
        description: "Мощно оръдие, което нанася масивни щети с по-бавна презарядка.",
        stats: { speed: 2.4, bulletSpeed: 7.9, fireDelay: 520, attack: 34, defense: 20, health: 145, color: "#4f5c35" }
      },
      {
        id: "bt7",
        name: "BT-7",
        type: "Бърз лек танк",
        description: "Много подвижен модел за игра около сгради и бързи атаки.",
        stats: { speed: 3.9, bulletSpeed: 6.9, fireDelay: 250, attack: 14, defense: 7, health: 88, color: "#60764e" }
      },
      {
        id: "su85",
        name: "SU-85",
        type: "Самоходно оръдие",
        description: "Силен далечен изстрел и добра пробивност, но не е най-издръжливият.",
        stats: { speed: 2.8, bulletSpeed: 8.5, fireDelay: 340, attack: 26, defense: 13, health: 112, color: "#536245" }
      },
      {
        id: "t26",
        name: "T-26",
        type: "Лек танк",
        description: "Лек и маневрен модел, удобен за избягване на вражески огън зад прикрития.",
        stats: { speed: 3.6, bulletSpeed: 6.8, fireDelay: 270, attack: 15, defense: 8, health: 92, color: "#72855b" }
      }
    ]
  }
};

const panels = {
  mode: document.getElementById("mode-panel"),
  country: document.getElementById("country-panel"),
  tank: document.getElementById("tank-panel"),
  wave: document.getElementById("wave-panel"),
  online: document.getElementById("online-panel"),
  game: document.getElementById("game-panel")
};

const modeOptions = document.getElementById("mode-options");
const countryOptions = document.getElementById("country-options");
const tankOptions = document.getElementById("tank-options");
const waveOptions = document.getElementById("wave-options");
const allyOptions = document.getElementById("ally-options");
const countryPanelTitle = document.getElementById("country-panel-title");
const countryPanelCopy = document.getElementById("country-panel-copy");
const tankPanelTitle = document.getElementById("tank-panel-title");
const tankPanelCopy = document.getElementById("tank-panel-copy");
const setupPanelEyebrow = document.getElementById("setup-panel-eyebrow");
const setupPanelTitle = document.getElementById("setup-panel-title");
const wavePanelCopy = document.getElementById("wave-panel-copy");
const allyPanelCopy = document.getElementById("ally-panel-copy");
const allySelectionBlock = document.getElementById("ally-selection-block");
const masterVolumeInput = document.getElementById("master-volume");
const effectsVolumeInput = document.getElementById("effects-volume");
const musicVolumeInput = document.getElementById("music-volume");
const masterVolumeValue = document.getElementById("master-volume-value");
const effectsVolumeValue = document.getElementById("effects-volume-value");
const musicVolumeValue = document.getElementById("music-volume-value");
const allyToggleButton = document.getElementById("ally-toggle-button");
const startBattleButton = document.getElementById("start-battle-button");
const backToSetupButton = document.getElementById("back-to-setup");
const hostOnlineButton = document.getElementById("host-online-button");
const joinOnlineButton = document.getElementById("join-online-button");
const startOnlineMatchButton = document.getElementById("start-online-match-button");
const applyRemoteSdpButton = document.getElementById("apply-remote-sdp-button");
const copyLocalSdpButton = document.getElementById("copy-local-sdp-button");
const onlinePlayerNameInput = document.getElementById("online-player-name");
const onlineLocalSdp = document.getElementById("online-local-sdp");
const onlineRemoteSdp = document.getElementById("online-remote-sdp");
const onlineStatus = document.getElementById("online-status");
const backToModeButton = document.getElementById("back-to-mode");
const backButton = document.getElementById("back-to-country");
const backToTankButton = document.getElementById("back-to-tank");
const restartButton = document.getElementById("restart-button");
const mobileButtons = Array.from(document.querySelectorAll("[data-control]"));

const hudCountry = document.getElementById("hud-country");
const hudTank = document.getElementById("hud-tank");
const hudHealth = document.getElementById("hud-health");
const hudScore = document.getElementById("hud-score");
const hudShield = document.getElementById("hud-shield");
const hudMines = document.getElementById("hud-mines");

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const explosionSoundSrc = "assets/sounds/explosion.wav";
const shotSoundSrc = "assets/sounds/shot.wav";
const battleLoopSoundSrc = "assets/sounds/battle-loop.wav";

const battlefieldBackgrounds = [
  "assets/backgrounds/battlefields/battlefield-forest-crossroads.jpg",
  "assets/backgrounds/battlefields/battlefield-desert-base.jpg",
  "assets/backgrounds/battlefields/battlefield-neon-arena.jpg"
].map((fileName) => {
  const image = new Image();
  image.src = encodeURI(fileName);
  return image;
});

const battleLoopAudio = new Audio(battleLoopSoundSrc);
battleLoopAudio.loop = true;

const audioSettings = {
  master: 1,
  effects: 1,
  music: 1
};

function getEffectsVolume() {
  return audioSettings.master * audioSettings.effects;
}

function getMusicVolume() {
  return audioSettings.master * audioSettings.music * 0.4;
}

function updateAudioUi() {
  masterVolumeInput.value = String(Math.round(audioSettings.master * 100));
  effectsVolumeInput.value = String(Math.round(audioSettings.effects * 100));
  musicVolumeInput.value = String(Math.round(audioSettings.music * 100));
  masterVolumeValue.textContent = `${Math.round(audioSettings.master * 100)}%`;
  effectsVolumeValue.textContent = `${Math.round(audioSettings.effects * 100)}%`;
  musicVolumeValue.textContent = `${Math.round(audioSettings.music * 100)}%`;
  battleLoopAudio.volume = getMusicVolume();
}

function playExplosionSound() {
  const sound = new Audio(explosionSoundSrc);
  sound.volume = getEffectsVolume() * 0.75;
  sound.play().catch(() => {});
}

function playShotSound() {
  const sound = new Audio(shotSoundSrc);
  sound.volume = getEffectsVolume() * 0.45;
  sound.play().catch(() => {});
}

function startBattleLoopSound() {
  battleLoopAudio.volume = getMusicVolume();
  battleLoopAudio.currentTime = 0;
  battleLoopAudio.play().catch(() => {});
}

function stopBattleLoopSound() {
  battleLoopAudio.pause();
  battleLoopAudio.currentTime = 0;
}

function isDesktopDevice() {
  return window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 900;
}

function enterDesktopFullscreen() {
  if (!isDesktopDevice() || document.fullscreenElement) {
    return;
  }

  document.documentElement.requestFullscreen?.().catch(() => {});
}

const input = {
  up: false,
  down: false,
  left: false,
  right: false,
  shoot: false,
  placeMine: false
};

const inputP2 = {
  up: false,
  down: false,
  left: false,
  right: false,
  shoot: false,
  placeMine: false
};

const state = {
  gameMode: "single",
  setupSlot: 1,
  playerName: "Player",
  selectedFactionKey: null,
  selectedTank: null,
  selectedAllyTank: null,
  selectedWaveSize: 4,
  selections: {
    1: null,
    2: null
  },
  player: null,
  allies: [],
  bullets: [],
  enemies: [],
  obstacles: [],
  powerups: [],
  mines: [],
  explosions: [],
  score: 0,
  gameOver: false,
  lastTime: 0,
  enemySpawnTimer: 0,
  powerupTimer: 0,
  waveNumber: 0,
  pendingWaveEnemies: 0,
  startWithAlly: false,
  currentBackgroundIndex: -1,
  versus: null,
  animationFrame: null
};

const networkState = {
  role: null,
  connected: false,
  localPlayerSlot: 1,
  remotePlayerSlot: 2,
  remotePlayerName: "Opponent",
  pc: null,
  channel: null,
  remoteSetup: null,
  remoteInput: { ...inputP2 },
  lastSerializedState: "",
  pendingStart: false
};

const modeChoices = [
  {
    id: "single",
    title: "Singleplayer",
    meta: "Срещу AI",
    description: "Класическият режим с вълни, бонуси и вражески танкове."
  },
  {
    id: "local",
    title: "Local VS",
    meta: "Двама на един компютър",
    description: "Играч 1 срещу Играч 2 на една машина."
  },
  {
    id: "online",
    title: "Online VS",
    meta: "Истински човек онлайн",
    description: "Peer-to-peer двубой чрез ръчно свързване с кодове."
  }
];

const waveChoices = [
  { value: 2, title: "2 танка", meta: "Лека вълна", description: "По-спокойно темпо и повече време за маневри." },
  { value: 4, title: "4 танка", meta: "Средна вълна", description: "Балансиран вариант с постоянен натиск." },
  { value: 6, title: "6 танка", meta: "Тежка вълна", description: "Много врагове наведнъж и по-силен хаос на полето." }
];

function showPanel(name) {
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle("panel--active", key === name);
  });
}

function resetSetupFlow() {
  state.setupSlot = 1;
  state.selectedFactionKey = null;
  state.selectedTank = null;
  state.selectedAllyTank = null;
  state.startWithAlly = false;
  state.selections = { 1: null, 2: null };
  state.versus = null;
  networkState.remoteSetup = null;
  networkState.remotePlayerName = "Opponent";
  networkState.remoteInput = { ...inputP2 };
  networkState.lastSerializedState = "";
  networkState.pendingStart = false;
}

function sanitizePlayerName(value) {
  const cleaned = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 18);
  return cleaned || "Player";
}

function syncOnlinePlayerName() {
  state.playerName = sanitizePlayerName(onlinePlayerNameInput?.value);
  if (onlinePlayerNameInput) {
    onlinePlayerNameInput.value = state.playerName;
  }
  try {
    localStorage.setItem("tanks-online-player-name", state.playerName);
  } catch (error) {}
}

function createCard({ title, meta, description, stats, onClick }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-card";
  const statsMarkup = stats
    ? `
    <div class="choice-card__stats">
      ${stats
        .map(
          (stat) => `
        <div class="stat-row">
          <div class="stat-row__head">
            <span>${stat.label}</span>
            <strong>${stat.value}</strong>
          </div>
          <div class="stat-row__track">
            <div class="stat-row__fill" style="width: ${Math.max(8, Math.min(100, (stat.value / stat.max) * 100))}%"></div>
          </div>
        </div>`
        )
        .join("")}
    </div>`
    : "";
  button.innerHTML = `
    <p class="choice-card__title">${title}</p>
    <p class="choice-card__meta">${meta}</p>
    <p class="choice-card__desc">${description}</p>
    ${statsMarkup}
  `;
  button.addEventListener("click", onClick);
  return button;
}

function renderModes() {
  modeOptions.innerHTML = "";
  modeChoices.forEach((mode) => {
    modeOptions.appendChild(
      createCard({
        title: mode.title,
        meta: mode.meta,
        description: mode.description,
        onClick: () => {
          state.gameMode = mode.id;
          resetSetupFlow();
          updateCountryPanelCopy();
          renderCountries();
          showPanel("country");
        }
      })
    );
  });
}

function updateCountryPanelCopy() {
  if (state.gameMode === "single") {
    countryPanelTitle.textContent = "Избери своята армия";
    countryPanelCopy.textContent = "Първо избираш нация, после модел танк, а след това влизаш в бойното поле.";
    return;
  }

  if (state.gameMode === "local") {
    countryPanelTitle.textContent = `Играч ${state.setupSlot}: Избери армия`;
    countryPanelCopy.textContent = state.setupSlot === 1
      ? "Настрой първия играч за локален двубой."
      : "Настрой втория играч за локален двубой.";
    return;
  }

  countryPanelTitle.textContent = "Онлайн: Избери своята армия";
  countryPanelCopy.textContent = "Избери само своята страна и танк. Другият играч ще избере своите на неговия компютър.";
}

function renderCountries() {
  countryOptions.innerHTML = "";
  updateCountryPanelCopy();

  Object.entries(factions).forEach(([key, faction]) => {
    countryOptions.appendChild(
      createCard({
        title: faction.name,
        meta: `${faction.tanks.length} налични модела`,
        description: faction.intro,
        onClick: () => {
          state.selectedFactionKey = key;
          renderTanks(key);
          showPanel("tank");
        }
      })
    );
  });
}

function renderTanks(factionKey) {
  const faction = factions[factionKey];
  tankPanelTitle.textContent = state.gameMode === "local"
    ? `Играч ${state.setupSlot}: Избери танк за ${faction.name}`
    : `Избери танк за ${faction.name}`;
  tankPanelCopy.textContent = state.gameMode === "online"
    ? `${faction.intro} Това е само твоят танк за онлайн двубоя.`
    : faction.intro;
  tankOptions.innerHTML = "";

  faction.tanks.forEach((tank) => {
    tankOptions.appendChild(
      createCard({
        title: tank.name,
        meta: tank.type,
        description: `${tank.description} Скорост: ${tank.stats.speed.toFixed(1)} | Атака: ${tank.stats.attack} | Защита: ${tank.stats.defense}`,
        stats: [
          { label: "Атака", value: tank.stats.attack, max: 40 },
          { label: "Защита", value: tank.stats.defense, max: 40 }
        ],
        onClick: () => {
          if (state.gameMode === "local") {
            state.selections[state.setupSlot] = { factionKey, tank };
            if (state.setupSlot === 1) {
              state.setupSlot = 2;
              renderCountries();
              showPanel("country");
            } else {
              renderWaveOptions();
              showPanel("wave");
            }
            return;
          }

          state.selectedFactionKey = factionKey;
          state.selectedTank = tank;
          state.selectedAllyTank = faction.tanks.find((candidate) => candidate.id !== tank.id) ?? tank;
          renderWaveOptions();
          showPanel(state.gameMode === "online" ? "online" : "wave");
        }
      })
    );
  });
}

function renderWaveOptions() {
  waveOptions.innerHTML = "";
  const faction = factions[state.selectedFactionKey];

  if (state.gameMode === "single") {
    setupPanelEyebrow.textContent = "Настройка на битката";
    setupPanelTitle.textContent = "Избери колко танка да има във вълна";
    wavePanelCopy.textContent = `${faction.name} с ${state.selectedTank.name}. Избери колко вражески танка да идват във всяка вълна.`;
  } else if (state.gameMode === "local") {
    setupPanelEyebrow.textContent = "Local VS";
    setupPanelTitle.textContent = "Провери двамата играчи и стартирай";
    wavePanelCopy.textContent = `Играч 1: ${factions[state.selections[1].factionKey].name} / ${state.selections[1].tank.name}. Играч 2: ${factions[state.selections[2].factionKey].name} / ${state.selections[2].tank.name}.`;
  } else {
    setupPanelEyebrow.textContent = "Online VS";
    setupPanelTitle.textContent = "Подготви онлайн двубоя";
    wavePanelCopy.textContent = `${faction.name} с ${state.selectedTank.name}. Следва свързване с друг играч.`;
  }

  if (state.gameMode === "single") {
    waveChoices.forEach((choice) => {
      const card = createCard({
        title: choice.title,
        meta: choice.meta,
        description: choice.description,
        onClick: () => {
          state.selectedWaveSize = choice.value;
          renderWaveOptions();
        }
      });

      if (choice.value === state.selectedWaveSize) {
        card.classList.add("choice-card--selected");
      }

      waveOptions.appendChild(card);
    });
  } else {
    const summary = createCard({
      title: state.gameMode === "local" ? "Local Дуeл" : "Online Дуeл",
      meta: state.gameMode === "local" ? "Играч срещу играч" : "Peer-to-peer",
      description: state.gameMode === "local"
        ? "Играч 1 управлява с WASD + Space + E. Играч 2 управлява със стрелки + Enter + Right Shift."
        : "След свързване двамата играчи ще влязат в двубой без AI и без вълни.",
      onClick: () => {}
    });
    summary.disabled = true;
    waveOptions.appendChild(summary);
  }

  const allowAllies = state.gameMode === "single";
  allyToggleButton.hidden = !allowAllies;
  allySelectionBlock.hidden = !allowAllies || !state.startWithAlly;
  allyOptions.innerHTML = "";

  if (allowAllies && state.startWithAlly) {
    allyPanelCopy.textContent = `Избери модел за съюзника от ${faction.name}.`;
    faction.tanks.forEach((tank) => {
      const card = createCard({
        title: tank.name,
        meta: tank.type,
        description: `Скорост: ${tank.stats.speed.toFixed(1)} | Атака: ${tank.stats.attack} | Защита: ${tank.stats.defense}`,
        stats: [
          { label: "Атака", value: tank.stats.attack, max: 40 },
          { label: "Защита", value: tank.stats.defense, max: 40 }
        ],
        onClick: () => {
          state.selectedAllyTank = tank;
          renderWaveOptions();
        }
      });

      if (state.selectedAllyTank?.id === tank.id) {
        card.classList.add("choice-card--selected");
      }

      allyOptions.appendChild(card);
    });
  }

  startBattleButton.textContent = state.gameMode === "single" ? "Старт" : "Старт Local VS";
}

function makePlayer(faction, tank) {
  return {
    x: canvas.width / 2,
    y: canvas.height - 90,
    width: 36,
    height: 44,
    bodyAngle: -Math.PI / 2,
    turretAngle: -Math.PI / 2,
    speed: tank.stats.speed,
    baseSpeed: tank.stats.speed,
    bulletSpeed: tank.stats.bulletSpeed,
    fireDelay: tank.stats.fireDelay,
    baseFireDelay: tank.stats.fireDelay,
    attack: tank.stats.attack,
    baseAttack: tank.stats.attack,
    defense: tank.stats.defense,
    color: tank.stats.color,
    health: tank.stats.health,
    maxHealth: tank.stats.health,
    mineCount: 0,
    shieldUntil: 0,
    rapidFireUntil: 0,
    speedBoostUntil: 0,
    doubleDamageUntil: 0,
    invulnerableUntil: 0,
    lastMinePlaced: 0,
    lastShot: 0,
    faction: faction.name,
    tankName: tank.name,
    isAlly: false
  };
}

function createAllyFromPlayer(player, allyTank) {
  const allyBase = makePlayer(factions[state.selectedFactionKey], allyTank);
  return {
    ...allyBase,
    x: Math.max(60, player.x - 80),
    y: Math.min(canvas.height - 80, player.y + 30),
    width: 32,
    height: 40,
    health: Math.round(allyBase.maxHealth * 0.8),
    maxHealth: Math.round(allyBase.maxHealth * 0.8),
    attack: Math.round(allyBase.attack * 0.82),
    defense: Math.round(allyBase.defense * 0.85),
    bulletSpeed: Math.max(5.5, allyBase.bulletSpeed * 0.92),
    fireDelay: Math.max(240, Math.round(allyBase.fireDelay * 0.95)),
    color: "#8db1c7",
    lastShot: 0,
    isAlly: true
  };
}

function getTankById(factionKey, tankId) {
  return factions[factionKey].tanks.find((tank) => tank.id === tankId);
}

function serializeSelection(selection) {
  return {
    factionKey: selection.factionKey,
    tankId: selection.tank.id,
    playerName: sanitizePlayerName(selection.playerName ?? state.playerName)
  };
}

function deserializeSelection(payload) {
  return {
    factionKey: payload.factionKey,
    tank: getTankById(payload.factionKey, payload.tankId),
    playerName: sanitizePlayerName(payload.playerName)
  };
}

function makeVersusPlayer(slot, selection) {
  const tank = makePlayer(factions[selection.factionKey], selection.tank);
  const spawnAtBottom = slot === 1;
  return {
    ...tank,
    slot,
    factionKey: selection.factionKey,
    playerName: sanitizePlayerName(selection.playerName ?? `Играч ${slot}`),
    width: 36,
    height: 44,
    x: canvas.width / 2 + (spawnAtBottom ? -120 : 120),
    y: spawnAtBottom ? canvas.height - 120 : 120,
    bodyAngle: spawnAtBottom ? -Math.PI / 2 : Math.PI / 2,
    turretAngle: spawnAtBottom ? -Math.PI / 2 : Math.PI / 2
  };
}

function startVersusMatch(setup1, setup2, localSlot = 1, options = {}) {
  stopBattleLoopSound();
  cancelAnimationFrame(state.animationFrame);
  networkState.lastSerializedState = "";
  state.selectedFactionKey = setup1.factionKey;
  state.selectedTank = setup1.tank;
  state.player = null;
  state.allies = [];
  state.enemies = [];
  state.powerups = [];
  state.mines = [];
  state.bullets = [];
  state.explosions = [];
  state.obstacles = options.obstacles ? options.obstacles.map((obstacle) => ({ ...obstacle })) : generateObstacles();
  state.gameOver = false;
  state.score = 0;
  state.lastTime = 0;
  state.versus = {
    localSlot,
    players: [makeVersusPlayer(1, setup1), makeVersusPlayer(2, setup2)],
    winner: null
  };
  if (typeof options.backgroundIndex === "number") {
    state.currentBackgroundIndex = options.backgroundIndex;
  } else {
    pickBattlefieldBackground();
  }
  updateVersusHud();
  showPanel("game");
  startBattleLoopSound();
  state.animationFrame = requestAnimationFrame(gameLoop);
}

function updateVersusHud() {
  if (!state.versus) {
    return;
  }

  const p1 = state.versus.players[0];
  const p2 = state.versus.players[1];
  const localPlayer = state.versus.players.find((player) => player.slot === state.versus.localSlot) ?? p1;
  const remotePlayer = state.versus.players.find((player) => player.slot !== state.versus.localSlot) ?? p2;

  hudCountry.textContent = `Ти: ${localPlayer.playerName ?? "Player"}`;
  hudTank.textContent = `Враг: ${remotePlayer.playerName ?? "Opponent"}`;
  hudHealth.textContent = `Ти ${Math.max(0, Math.round(localPlayer.health))}`;
  hudScore.textContent = `Враг ${Math.max(0, Math.round(remotePlayer.health))}`;
  hudShield.textContent = localPlayer.tankName;
  hudMines.textContent = remotePlayer.tankName;
}

function moveVersusPlayer(player, controls, deltaTime, now) {
  if (!player || player.destroyed) {
    return;
  }

  let moveX = 0;
  let moveY = 0;
  if (controls.left) moveX -= 1;
  if (controls.right) moveX += 1;
  if (controls.up) moveY -= 1;
  if (controls.down) moveY += 1;

  if (moveX !== 0 || moveY !== 0) {
    const length = Math.hypot(moveX, moveY);
    moveX /= length;
    moveY /= length;
    const previousX = player.x;
    const previousY = player.y;
    const effectiveSpeed = getEffectiveSpeed(player, now);
    player.x += moveX * effectiveSpeed * deltaTime;
    player.y += moveY * effectiveSpeed * deltaTime;
    clampEntityToArena(player);
    resolveObstacleCollision(player, previousX, previousY);
    player.bodyAngle = Math.atan2(moveY, moveX);
    player.turretAngle = player.bodyAngle;
  }

  if (controls.shoot && now - player.lastShot >= player.fireDelay) {
    player.lastShot = now;
    fireBullet(player, player.slot === 1 ? -1 : 1, { side: `p${player.slot}` });
  }
}

function destroyVersusPlayer(player, now) {
  if (!player || player.destroyed) {
    return;
  }

  player.health = 0;
  player.destroyed = true;
  state.explosions.push({ x: player.x, y: player.y, life: now + 260 });
  playExplosionSound();
  const winner = state.versus.players.find((candidate) => candidate.slot !== player.slot);
  state.versus.winner = winner ? winner.slot : null;
  state.gameOver = true;
}

function updateVersusSimulation(deltaTime, now, controlsP1, controlsP2) {
  if (!state.versus || state.gameOver) {
    return;
  }

  moveVersusPlayer(state.versus.players[0], controlsP1, deltaTime, now);
  moveVersusPlayer(state.versus.players[1], controlsP2, deltaTime, now);

  state.bullets.forEach((bullet) => {
    bullet.x += bullet.velocityX * deltaTime;
    bullet.y += bullet.velocityY * deltaTime;

    state.versus.players.forEach((player) => {
      if (!player.destroyed && bullet.side !== `p${player.slot}` && rectHit(player, bullet)) {
        player.health -= calculateDamage(bullet.attack, player.defense ?? 0);
        bullet.x = bullet.y = -200;
        if (player.health <= 0) {
          destroyVersusPlayer(player, now);
        }
      }
    });

    state.obstacles.forEach((obstacle) => {
      if (rectHit(obstacle, bullet)) {
        bullet.x = bullet.y = -200;
      }
    });
  });

  state.bullets = state.bullets.filter(
    (bullet) => bullet.x > -40 && bullet.x < canvas.width + 40 && bullet.y > -40 && bullet.y < canvas.height + 40
  );
  state.explosions = state.explosions.filter((explosion) => explosion.life > now);
  updateVersusHud();
}

function drawVersusScene(now, snapshot = null) {
  const match = snapshot ?? state.versus;
  if (!match) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const currentBackground = battlefieldBackgrounds[state.currentBackgroundIndex];
  if (currentBackground && currentBackground.complete) {
    ctx.drawImage(currentBackground, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(12, 18, 20, 0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  state.obstacles.forEach((obstacle) => drawObstacle(obstacle));
  match.players.forEach((player) => {
    if (!player.destroyed && player.health > 0) {
      drawTank(player, true, player.slot === 1 ? "P1" : "P2");
      drawHealthBar(player);
    }
  });
  state.bullets.forEach((bullet) => {
    ctx.fillStyle = bullet.color;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  state.explosions.forEach((explosion) => {
    const progress = Math.max(0, (explosion.life - now) / 260);
    ctx.fillStyle = `rgba(255, 180, 77, ${progress})`;
    ctx.beginPath();
    ctx.arc(explosion.x, explosion.y, 34 * (1 - progress) + 10, 0, Math.PI * 2);
    ctx.fill();
  });

  if (state.gameOver) {
    ctx.fillStyle = "rgba(7, 8, 9, 0.58)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff3d4";
    ctx.textAlign = "center";
    ctx.font = "42px 'Russo One', sans-serif";
    const label = match.winner ? `ПОБЕДИТЕЛ: P${match.winner}` : "КРАЙ НА ДУЕЛА";
    ctx.fillText(label, canvas.width / 2, canvas.height / 2);
  }
}

function serializeOnlineMatchState() {
  return JSON.stringify({
    type: "state",
    backgroundIndex: state.currentBackgroundIndex,
    obstacles: state.obstacles,
    players: state.versus.players.map((player) => ({
      slot: player.slot,
      factionKey: player.factionKey,
      playerName: player.playerName,
      x: player.x,
      y: player.y,
      width: player.width,
      height: player.height,
      bodyAngle: player.bodyAngle,
      turretAngle: player.turretAngle,
      color: player.color,
      health: player.health,
      maxHealth: player.maxHealth,
      tankName: player.tankName,
      destroyed: !!player.destroyed
    })),
    bullets: state.bullets,
    explosions: state.explosions,
    winner: state.versus.winner,
    gameOver: state.gameOver
  });
}

function spawnPowerup() {
  const types = ["shield", "mine", "health", "rapid-fire", "speed", "double-damage", "invulnerable"];
  const type = types[Math.floor(Math.random() * types.length)];
  let x = 120 + Math.random() * (canvas.width - 240);
  let y = 120 + Math.random() * (canvas.height - 260);
  let attempts = 0;
  const candidate = { x, y, width: 34, height: 34 };

  while (attempts < 16 && state.obstacles.some((obstacle) => intersectsRect(candidate, obstacle))) {
    x = 120 + Math.random() * (canvas.width - 240);
    y = 120 + Math.random() * (canvas.height - 260);
    candidate.x = x;
    candidate.y = y;
    attempts += 1;
  }

  state.powerups.push({
    id: `${type}-${Date.now()}-${Math.random()}`,
    type,
    x,
    y,
    width: 34,
    height: 34,
    expiresAt: state.lastTime + 9000
  });
}

function getPowerupDuration(type) {
  if (type === "shield") return 7000;
  if (type === "rapid-fire") return 6500;
  if (type === "speed") return 6500;
  if (type === "double-damage") return 6500;
  if (type === "invulnerable") return 4200;
  return 0;
}

function getEffectiveSpeed(entity, now) {
  const baseSpeed = entity.baseSpeed ?? entity.speed ?? 2.5;
  if (entity === state.player && entity.speedBoostUntil > now) {
    return baseSpeed * 1.45;
  }
  return baseSpeed;
}

function getEffectiveFireDelay(entity, now) {
  const baseFireDelay = entity.baseFireDelay ?? entity.fireDelay ?? 360;
  if (entity === state.player && entity.rapidFireUntil > now) {
    return Math.max(120, Math.round(baseFireDelay * 0.52));
  }
  return baseFireDelay;
}

function getEffectiveAttack(entity, now) {
  const baseAttack = entity.baseAttack ?? entity.attack ?? 18;
  if (entity === state.player && entity.doubleDamageUntil > now) {
    return Math.round(baseAttack * 2);
  }
  return baseAttack;
}

function collectActiveEffects(player, now) {
  const effects = [];
  if (player.invulnerableUntil > now) effects.push("Неуязвим");
  if (player.shieldUntil > now) effects.push("Щит");
  if (player.rapidFireUntil > now) effects.push("Бърз огън");
  if (player.speedBoostUntil > now) effects.push("Скорост");
  if (player.doubleDamageUntil > now) effects.push("x2 атака");
  return effects;
}

function placeMine(now) {
  const player = state.player;
  if (!player || player.mineCount <= 0 || now - player.lastMinePlaced < 500) {
    return;
  }

  player.mineCount -= 1;
  player.lastMinePlaced = now;
  state.mines.push({
    id: `mine-${now}-${Math.random()}`,
    x: player.x,
    y: player.y,
    radius: 18,
    damage: 55,
    armedAt: now + 350
  });
}

function generateObstacles() {
  const layouts = [
    [
      { x: 250, y: 210, width: 130, height: 110, type: "hq" },
      { x: 640, y: 285, width: 120, height: 90, type: "warehouse" },
      { x: 1015, y: 210, width: 140, height: 120, type: "factory" }
    ],
    [
      { x: 210, y: 260, width: 120, height: 80, type: "warehouse" },
      { x: 540, y: 170, width: 155, height: 120, type: "factory" },
      { x: 890, y: 310, width: 125, height: 95, type: "hq" },
      { x: 1130, y: 210, width: 90, height: 140, type: "tower" }
    ],
    [
      { x: 320, y: 170, width: 110, height: 130, type: "tower" },
      { x: 640, y: 290, width: 180, height: 85, type: "warehouse" },
      { x: 975, y: 190, width: 130, height: 110, type: "factory" }
    ]
  ];

  const chosen = layouts[Math.floor(Math.random() * layouts.length)];
  return chosen.map((item, index) => ({
    id: `${item.type}-${index}`,
    ...item,
    points: item.type === "tower" ? 15 : item.type === "warehouse" ? 20 : item.type === "factory" ? 30 : 25,
    health: item.type === "tower" ? 60 : item.type === "warehouse" ? 95 : 120,
    maxHealth: item.type === "tower" ? 60 : item.type === "warehouse" ? 95 : 120
  }));
}

function clampEntityToArena(entity) {
  entity.x = Math.max(entity.width / 2, Math.min(canvas.width - entity.width / 2, entity.x));
  entity.y = Math.max(entity.height / 2 + 40, Math.min(canvas.height - entity.height / 2, entity.y));
}

function intersectsRect(a, b) {
  return (
    a.x - a.width / 2 < b.x + b.width / 2 &&
    a.x + a.width / 2 > b.x - b.width / 2 &&
    a.y - a.height / 2 < b.y + b.height / 2 &&
    a.y + a.height / 2 > b.y - b.height / 2
  );
}

function resolveObstacleCollision(entity, previousX, previousY) {
  for (const obstacle of state.obstacles) {
    if (!intersectsRect(entity, obstacle)) {
      continue;
    }

    entity.x = previousX;
    if (intersectsRect(entity, obstacle)) {
      entity.y = previousY;
    }
    return;
  }
}

function pickBattlefieldBackground() {
  if (battlefieldBackgrounds.length === 0) {
    return;
  }

  let nextIndex = Math.floor(Math.random() * battlefieldBackgrounds.length);
  if (battlefieldBackgrounds.length > 1) {
    while (nextIndex === state.currentBackgroundIndex) {
      nextIndex = Math.floor(Math.random() * battlefieldBackgrounds.length);
    }
  }

  state.currentBackgroundIndex = nextIndex;
}

function startGame(factionKey, tank, waveSize = state.selectedWaveSize) {
  const faction = factions[factionKey];
  stopBattleLoopSound();
  state.selectedFactionKey = factionKey;
  state.selectedTank = tank;
  state.selectedWaveSize = waveSize;
  state.player = makePlayer(faction, tank);
  state.allies = state.startWithAlly && state.selectedAllyTank ? [createAllyFromPlayer(state.player, state.selectedAllyTank)] : [];
  state.bullets = [];
  state.enemies = [];
  state.obstacles = generateObstacles();
  state.powerups = [];
  state.mines = [];
  state.explosions = [];
  state.score = 0;
  state.gameOver = false;
  state.lastTime = 0;
  state.enemySpawnTimer = 0;
  state.powerupTimer = 0;
  state.waveNumber = 0;
  state.pendingWaveEnemies = 0;
  pickBattlefieldBackground();

  hudCountry.textContent = faction.name;
  hudTank.textContent = tank.name;
  hudHealth.textContent = String(state.player.health);
  hudScore.textContent = "0";
  hudShield.textContent = "Няма";
  hudMines.textContent = "0";

  showPanel("game");
  cancelAnimationFrame(state.animationFrame);
  startBattleLoopSound();
  state.animationFrame = requestAnimationFrame(gameLoop);
}

function spawnEnemy() {
  const playerFaction = factions[state.selectedFactionKey];
  const enemyWidth = 34;
  const tankPool = Object.values(factions)
    .filter((faction) => faction.name !== factions[state.selectedFactionKey].name)
    .flatMap((faction) => faction.tanks);
  const tankTemplate = tankPool[Math.floor(Math.random() * tankPool.length)];

  let x = 40 + Math.random() * (canvas.width - 80);
  let attempts = 0;
  const candidate = { x, y: 40, width: enemyWidth, height: 42 };
  while (attempts < 12 && state.obstacles.some((obstacle) => intersectsRect(candidate, obstacle))) {
    x = 40 + Math.random() * (canvas.width - 80);
    candidate.x = x;
    attempts += 1;
  }

  state.enemies.push({
    x,
    y: -70,
    width: enemyWidth,
    height: 42,
    speed: Math.max(1.5, tankTemplate.stats.speed * 0.78) + state.score * 0.01,
    health: tankTemplate.stats.health * 0.7,
    maxHealth: tankTemplate.stats.health * 0.7,
    color: state.selectedFactionKey === "germany" ? "#587049" : "#7c735f",
    factionLabel: `${playerFaction.enemyName} ${tankTemplate.name}`,
    attack: Math.max(10, tankTemplate.stats.attack * 0.58),
    defense: Math.max(4, tankTemplate.stats.defense * 0.7),
    bulletSpeed: Math.max(4.8, tankTemplate.stats.bulletSpeed * 0.72),
    fireDelay: Math.max(420, tankTemplate.stats.fireDelay + 80),
    lastShot: 0
  });
}

function fireBullet(owner, directionY, options = {}) {
  const side = options.side ?? ((owner === state.player || owner.isAlly) ? "player" : "enemy");
  const isPlayer = side === "player" || side === "p1" || side === "p2";
  const angle = typeof owner.turretAngle === "number" ? owner.turretAngle : directionY < 0 ? -Math.PI / 2 : Math.PI / 2;
  const spawnOffset = 24;
  const bulletSpeed = owner.bulletSpeed;
  const attack = getEffectiveAttack(owner, performance.now());
  playShotSound();
  state.bullets.push({
    x: owner.x + Math.cos(angle) * spawnOffset,
    y: owner.y + Math.sin(angle) * spawnOffset,
    radius: 4,
    speed: bulletSpeed,
    velocityX: Math.cos(angle) * bulletSpeed,
    velocityY: Math.sin(angle) * bulletSpeed,
    attack,
    side,
    isPlayer,
    color: isPlayer ? "#ffd579" : "#ff816e"
  });
}

function calculateDamage(attack, defense) {
  return Math.max(4, Math.round(attack * (100 / (100 + defense * 3))));
}

function destroyTank(tank, now, options = {}) {
  if (!tank || tank.destroyed) {
    return;
  }

  tank.health = 0;
  tank.destroyed = true;
  state.explosions.push({ x: tank.x, y: tank.y, life: now + (options.explosionLife ?? 250) });
  playExplosionSound();

  if (options.addScore) {
    state.score += options.addScore;
  }

  if (options.gameOver) {
    state.gameOver = true;
  }
}

function updatePlayer(deltaTime, now) {
  const player = state.player;
  if (!player || state.gameOver) {
    return;
  }

  let moveX = 0;
  let moveY = 0;
  if (input.left) moveX -= 1;
  if (input.right) moveX += 1;
  if (input.up) moveY -= 1;
  if (input.down) moveY += 1;

  if (moveX !== 0 || moveY !== 0) {
    const length = Math.hypot(moveX, moveY);
    moveX /= length;
    moveY /= length;
    const previousX = player.x;
    const previousY = player.y;
    player.x += moveX * player.speed * deltaTime;
    player.y += moveY * player.speed * deltaTime;
    clampEntityToArena(player);
    resolveObstacleCollision(player, previousX, previousY);
    player.bodyAngle = Math.atan2(moveY, moveX);
    player.turretAngle = player.bodyAngle;
  }

  if (input.shoot && now - player.lastShot >= getEffectiveFireDelay(player, now)) {
    player.lastShot = now;
    fireBullet(player, -1);
  }

  if (input.placeMine) {
    placeMine(now);
    input.placeMine = false;
  }
}

function updateBullets(deltaTime) {
  state.bullets.forEach((bullet) => {
    bullet.x += bullet.velocityX * deltaTime;
    bullet.y += bullet.velocityY * deltaTime;
  });

  state.bullets = state.bullets.filter(
    (bullet) => bullet.x > -20 && bullet.x < canvas.width + 20 && bullet.y > -20 && bullet.y < canvas.height + 20
  );
}

function applyEnemySpacing(enemy, deltaTime) {
  let pushX = 0;
  let pushY = 0;

  state.enemies.forEach((otherEnemy) => {
    if (otherEnemy === enemy || otherEnemy.destroyed) {
      return;
    }

    const dx = enemy.x - otherEnemy.x;
    const dy = enemy.y - otherEnemy.y;
    const distance = Math.hypot(dx, dy) || 0.001;
    const minDistance = ((enemy.width + otherEnemy.width) * 0.5) + 26;

    if (distance < minDistance) {
      const strength = (minDistance - distance) / minDistance;
      pushX += (dx / distance) * strength;
      pushY += (dy / distance) * strength;
    }
  });

  if (pushX !== 0 || pushY !== 0) {
    const pushLength = Math.hypot(pushX, pushY) || 1;
    enemy.x += (pushX / pushLength) * enemy.speed * 0.75 * deltaTime;
    enemy.y += (pushY / pushLength) * enemy.speed * 0.75 * deltaTime;
  }
}

function updateEnemies(deltaTime, now) {
  state.enemySpawnTimer += deltaTime;
  state.powerupTimer += deltaTime;
  const spawnDelay = Math.max(32, 96 - state.waveNumber * 2);

  if (!state.gameOver && state.pendingWaveEnemies === 0 && state.enemies.length === 0 && state.enemySpawnTimer >= spawnDelay) {
    state.enemySpawnTimer = 0;
    state.waveNumber += 1;
    state.pendingWaveEnemies = state.selectedWaveSize;
  }

  if (!state.gameOver && state.pendingWaveEnemies > 0 && state.enemySpawnTimer >= 12) {
    state.enemySpawnTimer = 0;
    spawnEnemy();
    state.pendingWaveEnemies -= 1;
  }

  if (!state.gameOver && state.powerupTimer >= 260 && state.powerups.length < 2) {
    state.powerupTimer = 0;
    spawnPowerup();
  }

  state.enemies.forEach((enemy) => {
    const previousX = enemy.x;
    const previousY = enemy.y;
    const dx = state.player.x - enemy.x;
    const dy = state.player.y - enemy.y;
    const distance = Math.hypot(dx, dy) || 1;
    const angleToPlayer = Math.atan2(dy, dx);
    const preferredDistance = Math.max(enemy.height * 2.6, 110);
    const stopDistance = preferredDistance + 18;
    const retreatDistance = Math.max(enemy.height * 1.25, 54);

    if (distance > stopDistance) {
      enemy.x += (dx / distance) * enemy.speed * 0.7 * deltaTime;
      enemy.y += (dy / distance) * enemy.speed * 0.7 * deltaTime;
    } else if (distance < retreatDistance) {
      enemy.x -= (dx / distance) * enemy.speed * 0.45 * deltaTime;
      enemy.y -= (dy / distance) * enemy.speed * 0.45 * deltaTime;
    } else {
      const orbitDirection = enemy.x < state.player.x ? -1 : 1;
      enemy.x += Math.cos(angleToPlayer + orbitDirection * Math.PI / 2) * enemy.speed * 0.18 * deltaTime;
      enemy.y += Math.sin(angleToPlayer + orbitDirection * Math.PI / 2) * enemy.speed * 0.18 * deltaTime;
    }

    applyEnemySpacing(enemy, deltaTime);
    enemy.bodyAngle = angleToPlayer;
    enemy.turretAngle = angleToPlayer;
    clampEntityToArena(enemy);
    resolveObstacleCollision(enemy, previousX, previousY);

    if (now - enemy.lastShot >= enemy.fireDelay && Math.random() < 0.015) {
      enemy.lastShot = now;
      fireBullet(
        {
          x: enemy.x,
          y: enemy.y,
          turretAngle: enemy.turretAngle,
          bulletSpeed: enemy.bulletSpeed,
          attack: enemy.attack
        },
        1
      );
    }

    if (enemy.y > canvas.height + 40) {
      enemy.health = 0;
      enemy.destroyed = true;
      state.player.health = Math.max(0, state.player.health - 18);
      if (state.player.health <= 0) {
        destroyTank(state.player, now, { gameOver: true, explosionLife: 220 });
      }
    }
  });

  updatePowerups(now);
  updateMines(now);
  updateAllies(deltaTime, now);
  handleCollisions(now);
  state.enemies = state.enemies.filter((enemy) => enemy.health > 0 && !enemy.destroyed);
  state.allies = state.allies.filter((ally) => ally.health > 0 && !ally.destroyed);
}

function updatePowerups(now) {
  state.powerups = state.powerups.filter((powerup) => powerup.expiresAt > now);

  state.powerups.forEach((powerup) => {
    if (!state.player) {
      return;
    }

    if (intersectsRect(state.player, powerup)) {
      if (powerup.type === "shield") {
        state.player.shieldUntil = Math.max(state.player.shieldUntil, now) + getPowerupDuration("shield");
      } else if (powerup.type === "mine") {
        state.player.mineCount += 2;
      } else if (powerup.type === "health") {
        state.player.health = Math.min(state.player.maxHealth, state.player.health + 35);
      } else if (powerup.type === "rapid-fire") {
        state.player.rapidFireUntil = Math.max(state.player.rapidFireUntil, now) + getPowerupDuration("rapid-fire");
      } else if (powerup.type === "speed") {
        state.player.speedBoostUntil = Math.max(state.player.speedBoostUntil, now) + getPowerupDuration("speed");
      } else if (powerup.type === "double-damage") {
        state.player.doubleDamageUntil = Math.max(state.player.doubleDamageUntil, now) + getPowerupDuration("double-damage");
      } else if (powerup.type === "invulnerable") {
        state.player.invulnerableUntil = Math.max(state.player.invulnerableUntil, now) + getPowerupDuration("invulnerable");
      }
      powerup.expiresAt = 0;
      state.explosions.push({ x: powerup.x, y: powerup.y, life: now + 140 });
    }
  });
}

function updateMines(now) {
  state.mines.forEach((mine) => {
    if (mine.armedAt > now) {
      return;
    }

    state.enemies.forEach((enemy) => {
      const distance = Math.hypot(enemy.x - mine.x, enemy.y - mine.y);
      if (distance <= mine.radius + Math.max(enemy.width, enemy.height) * 0.45) {
        enemy.health -= mine.damage;
        mine.armedAt = -1;
        state.explosions.push({ x: mine.x, y: mine.y, life: now + 220 });
        if (enemy.health <= 0) {
          destroyTank(enemy, now, { addScore: 12 });
        }
      }
    });
  });

  state.mines = state.mines.filter((mine) => mine.armedAt !== -1);
}

function updateAllies(deltaTime, now) {
  state.allies.forEach((ally) => {
    const target = state.enemies.reduce((best, enemy) => {
      if (!best) return enemy;
      return Math.hypot(enemy.x - ally.x, enemy.y - ally.y) < Math.hypot(best.x - ally.x, best.y - ally.y) ? enemy : best;
    }, null);

    const followX = state.player.x - 70;
    const followY = state.player.y + 20;
    const targetX = target ? target.x : followX;
    const targetY = target ? target.y : followY;
    const dx = targetX - ally.x;
    const dy = targetY - ally.y;
    const distance = Math.hypot(dx, dy) || 1;
    const previousX = ally.x;
    const previousY = ally.y;

    if (!target || distance > 120) {
      ally.x += (dx / distance) * ally.speed * 0.8 * deltaTime;
      ally.y += (dy / distance) * ally.speed * 0.8 * deltaTime;
    }

    clampEntityToArena(ally);
    resolveObstacleCollision(ally, previousX, previousY);
    ally.bodyAngle = Math.atan2(dy, dx);
    ally.turretAngle = ally.bodyAngle;

    if (target && now - ally.lastShot >= ally.fireDelay) {
      ally.lastShot = now;
      fireBullet(ally, -1);
    }
  });
}

function handleCollisions(now) {
  state.bullets.forEach((bullet) => {
    if (bullet.isPlayer) {
      state.enemies.forEach((enemy) => {
        if (rectHit(enemy, bullet)) {
          enemy.health -= calculateDamage(bullet.attack, enemy.defense ?? 0);
          bullet.x = -100;
          bullet.y = -100;
          if (enemy.health <= 0) {
            destroyTank(enemy, now, { addScore: 10 });
          }
        }
      });
    } else {
      state.allies.forEach((ally) => {
        if (rectHit(ally, bullet)) {
          ally.health -= calculateDamage(bullet.attack, ally.defense ?? 0);
          bullet.x = canvas.width + 100;
          bullet.y = canvas.height + 100;
          if (ally.health <= 0) {
            destroyTank(ally, now, { explosionLife: 200 });
          }
        }
      });
    }

    if (!bullet.isPlayer && state.player && rectHit(state.player, bullet)) {
      if (state.player.invulnerableUntil > now) {
        bullet.x = canvas.width + 100;
        bullet.y = canvas.height + 100;
        state.explosions.push({ x: state.player.x, y: state.player.y, life: now + 80 });
        return;
      }
      const shieldBonus = state.player.shieldUntil > now ? 35 : 0;
      state.player.health -= calculateDamage(bullet.attack, (state.player.defense ?? 0) + shieldBonus);
      bullet.x = canvas.width + 100;
      bullet.y = canvas.height + 100;
      if (state.player.health <= 0) {
        destroyTank(state.player, now, { gameOver: true, explosionLife: 220 });
      }
    }

    state.obstacles.forEach((obstacle) => {
      if (rectHit(obstacle, bullet)) {
        obstacle.health -= bullet.isPlayer ? bullet.attack * 0.85 : bullet.attack * 0.65;
        if (bullet.isPlayer && obstacle.health <= 0) {
          state.score += obstacle.points ?? 10;
          playExplosionSound();
        }
        state.explosions.push({ x: bullet.x, y: bullet.y, life: now + 100 });
        bullet.x = bullet.velocityX < 0 ? -100 : canvas.width + 100;
        bullet.y = bullet.velocityY < 0 ? -100 : canvas.height + 100;
      }
    });
  });

  state.obstacles = state.obstacles.filter((obstacle) => obstacle.health > 0);
  state.explosions = state.explosions.filter((explosion) => explosion.life > now);
  if (state.player) {
    const activeEffects = collectActiveEffects(state.player, now);
    hudShield.textContent = activeEffects.length > 0 ? activeEffects.join(", ") : "Няма";
    hudMines.textContent = String(state.player.mineCount);
  }
  hudHealth.textContent = String(Math.max(0, Math.round(state.player.health)));
  hudScore.textContent = String(state.score);
}

function rectHit(target, bullet) {
  return (
    bullet.x > target.x - target.width / 2 &&
    bullet.x < target.x + target.width / 2 &&
    bullet.y > target.y - target.height / 2 &&
    bullet.y < target.y + target.height / 2
  );
}

function drawTank(entity, isPlayer, label) {
  ctx.save();
  ctx.translate(entity.x, entity.y);
  ctx.rotate((entity.bodyAngle ?? entity.turretAngle ?? -Math.PI / 2) + Math.PI / 2);

  ctx.fillStyle = entity.color;
  ctx.fillRect(-entity.width / 2, -entity.height / 2, entity.width, entity.height);
  ctx.fillStyle = "#2b251d";
  ctx.fillRect(-entity.width / 2 - 5, -entity.height / 2, 4, entity.height);
  ctx.fillRect(entity.width / 2 + 1, -entity.height / 2, 4, entity.height);
  ctx.restore();

  ctx.save();
  ctx.translate(entity.x, entity.y);
  ctx.rotate((entity.turretAngle ?? entity.bodyAngle ?? -Math.PI / 2) + Math.PI / 2);
  ctx.fillStyle = "#c9b996";
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2e2618";
  ctx.fillRect(-3, -entity.height / 2 - 14, 6, 20);
  ctx.restore();

  ctx.fillStyle = "rgba(8, 10, 12, 0.48)";
  ctx.fillRect(entity.x - 18, entity.y + entity.height / 2 + 5, 36, 5);

  if (!isPlayer) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
    ctx.font = "12px 'Exo 2', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, entity.x, entity.y - entity.height / 2 - 12);
  }
}

function drawHealthBar(entity) {
  const width = 40;
  const ratio = Math.max(0, entity.health / entity.maxHealth);
  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.fillRect(entity.x - width / 2, entity.y - entity.height / 2 - 16, width, 5);
  ctx.fillStyle = ratio > 0.45 ? "#8fd46c" : ratio > 0.2 ? "#f2c14d" : "#dd624c";
  ctx.fillRect(entity.x - width / 2, entity.y - entity.height / 2 - 16, width * ratio, 5);
}

function drawObstacle(obstacle) {
  const left = obstacle.x - obstacle.width / 2;
  const top = obstacle.y - obstacle.height / 2;
  const ratio = Math.max(0, obstacle.health / obstacle.maxHealth);

  ctx.fillStyle = obstacle.type === "factory" ? "#87735d" : obstacle.type === "tower" ? "#6d6966" : obstacle.type === "hq" ? "#8e7c68" : "#7a6958";
  ctx.fillRect(left, top, obstacle.width, obstacle.height);

  ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
  for (let row = 0; row < Math.floor(obstacle.height / 24); row += 1) {
    for (let col = 0; col < Math.floor(obstacle.width / 28); col += 1) {
      ctx.fillRect(left + 8 + col * 28, top + 8 + row * 24, 14, 10);
    }
  }

  if (obstacle.type === "factory") {
    ctx.fillStyle = "#54463b";
    ctx.fillRect(left + obstacle.width - 24, top - 24, 12, 24);
  }

  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.fillRect(left, top + obstacle.height, obstacle.width, 8);

  ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
  ctx.fillRect(left, top - 14, obstacle.width, 6);
  ctx.fillStyle = ratio > 0.5 ? "#8fd46c" : ratio > 0.25 ? "#f2c14d" : "#dd624c";
  ctx.fillRect(left, top - 14, obstacle.width * ratio, 6);
}

function drawScene(now) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const currentBackground = battlefieldBackgrounds[state.currentBackgroundIndex];

  if (currentBackground && currentBackground.complete) {
    ctx.drawImage(currentBackground, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(12, 18, 20, 0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
    for (let i = 0; i < 18; i += 1) {
      const x = (i * 73 + (now * 0.02) % 80) % canvas.width;
      ctx.fillRect(x, 80 + (i % 3) * 28, 28, 2);
    }

    ctx.fillStyle = "#49643b";
    ctx.fillRect(0, canvas.height - 70, canvas.width, 70);
  }

  state.obstacles.forEach((obstacle) => {
    drawObstacle(obstacle);
  });

  state.powerups.forEach((powerup) => {
    ctx.save();
    ctx.translate(powerup.x, powerup.y);
    ctx.fillStyle =
      powerup.type === "shield" ? "#6ad0ff"
      : powerup.type === "mine" ? "#f0c15d"
      : powerup.type === "health" ? "#7fe284"
      : powerup.type === "rapid-fire" ? "#ff8a57"
      : powerup.type === "speed" ? "#8b9cff"
      : powerup.type === "double-damage" ? "#ff5d88"
      : "#ffe66f";
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#142127";
    ctx.lineWidth = 2.5;
    if (powerup.type === "shield") {
      ctx.beginPath();
      ctx.moveTo(0, -8);
      ctx.lineTo(8, -4);
      ctx.lineTo(6, 6);
      ctx.lineTo(0, 10);
      ctx.lineTo(-6, 6);
      ctx.lineTo(-8, -4);
      ctx.closePath();
      ctx.stroke();
    } else if (powerup.type === "mine") {
      ctx.beginPath();
      ctx.arc(0, 2, 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-8, -8);
      ctx.lineTo(-3, -3);
      ctx.moveTo(8, -8);
      ctx.lineTo(3, -3);
      ctx.moveTo(-8, 8);
      ctx.lineTo(-3, 3);
      ctx.moveTo(8, 8);
      ctx.lineTo(3, 3);
      ctx.stroke();
    } else if (powerup.type === "health") {
      ctx.beginPath();
      ctx.moveTo(0, -8);
      ctx.lineTo(0, 8);
      ctx.moveTo(-8, 0);
      ctx.lineTo(8, 0);
      ctx.stroke();
    } else if (powerup.type === "rapid-fire") {
      ctx.beginPath();
      ctx.moveTo(-6, -7);
      ctx.lineTo(1, -1);
      ctx.lineTo(-2, -1);
      ctx.lineTo(6, 7);
      ctx.lineTo(0, 1);
      ctx.lineTo(3, 1);
      ctx.stroke();
    } else if (powerup.type === "speed") {
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(2, -6);
      ctx.moveTo(-8, 6);
      ctx.lineTo(2, 0);
      ctx.moveTo(-8, -6);
      ctx.lineTo(2, -12);
      ctx.stroke();
    } else if (powerup.type === "double-damage") {
      ctx.font = "bold 12px 'Russo One', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeText("x2", 0, 1);
    } else if (powerup.type === "invulnerable") {
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-6, -6);
      ctx.lineTo(6, 6);
      ctx.moveTo(6, -6);
      ctx.lineTo(-6, 6);
      ctx.stroke();
    }
    ctx.restore();
  });

  state.mines.forEach((mine) => {
    ctx.fillStyle = mine.armedAt > now ? "#d7b36b" : "#d95454";
    ctx.beginPath();
    ctx.arc(mine.x, mine.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(30, 18, 12, 0.6)";
    ctx.strokeRect(mine.x - 7, mine.y - 7, 14, 14);
  });

  if (state.player && !state.player.destroyed && state.player.health > 0) {
    drawTank(state.player, true);
    drawHealthBar(state.player);
    if (state.player.shieldUntil > now) {
      ctx.strokeStyle = "rgba(106, 208, 255, 0.75)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(state.player.x, state.player.y, 38, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (state.player.invulnerableUntil > now) {
      ctx.strokeStyle = "rgba(255, 234, 111, 0.82)";
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.arc(state.player.x, state.player.y, 46, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  state.allies.forEach((ally) => {
    drawTank(ally, true);
    drawHealthBar(ally);
  });

  state.enemies.forEach((enemy) => {
    drawTank(enemy, false, enemy.factionLabel);
    drawHealthBar(enemy);
  });

  state.bullets.forEach((bullet) => {
    ctx.fillStyle = bullet.color;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  state.explosions.forEach((explosion) => {
    const progress = Math.max(0, (explosion.life - now) / 250);
    ctx.fillStyle = `rgba(255, 180, 77, ${progress})`;
    ctx.beginPath();
    ctx.arc(explosion.x, explosion.y, 30 * (1 - progress) + 8, 0, Math.PI * 2);
    ctx.fill();
  });

  if (state.gameOver) {
    ctx.fillStyle = "rgba(7, 8, 9, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff3d4";
    ctx.textAlign = "center";
    ctx.font = "42px 'Russo One', sans-serif";
    ctx.fillText("КРАЙ НА БИТКАТА", canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = "24px 'Exo 2', sans-serif";
    ctx.fillText(`Краен резултат: ${state.score}`, canvas.width / 2, canvas.height / 2 + 34);
    ctx.font = "18px 'Exo 2', sans-serif";
    ctx.fillText("Използвай 'Смени танка', за да започнеш нова битка.", canvas.width / 2, canvas.height / 2 + 68);
  }
}

function closeOnlineConnection() {
  networkState.channel?.close?.();
  networkState.pc?.close?.();
  networkState.role = null;
  networkState.connected = false;
  networkState.pc = null;
  networkState.channel = null;
  networkState.remoteSetup = null;
  networkState.remoteInput = { ...inputP2 };
  networkState.pendingStart = false;
  startOnlineMatchButton.disabled = true;
  onlineLocalSdp.value = "";
  onlineRemoteSdp.value = "";
  onlineStatus.textContent = "Няма активна връзка.";
}

function updateOnlineStatus(message) {
  onlineStatus.textContent = message;
}

function setupDataChannel(channel) {
  networkState.channel = channel;
  channel.onopen = () => {
    networkState.connected = true;
    startOnlineMatchButton.disabled = !(networkState.role === "host" && networkState.remoteSetup);
    updateOnlineStatus("Връзката е готова. Разменете настройките и натиснете Старт Online.");
    channel.send(JSON.stringify({
      type: "setup",
      selection: serializeSelection({ factionKey: state.selectedFactionKey, tank: state.selectedTank, playerName: state.playerName })
    }));
  };
  channel.onclose = () => {
    networkState.connected = false;
    startOnlineMatchButton.disabled = true;
    updateOnlineStatus("Връзката е прекъсната.");
  };
  channel.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.type === "setup") {
      networkState.remoteSetup = deserializeSelection(message.selection);
      networkState.remotePlayerName = networkState.remoteSetup.playerName;
      startOnlineMatchButton.disabled = !(networkState.role === "host" && networkState.connected && networkState.remoteSetup);
      updateOnlineStatus(`Получих настройките на ${networkState.remotePlayerName}. Ако си host, можеш да стартираш мача.`);
    }
    if (message.type === "input") {
      networkState.remoteInput = message.input;
    }
    if (message.type === "start") {
      const setup1 = deserializeSelection(message.setup1);
      const setup2 = deserializeSelection(message.setup2);
      networkState.localPlayerSlot = message.localSlot === 1 ? 2 : 1;
      startVersusMatch(setup1, setup2, networkState.localPlayerSlot, {
        obstacles: message.obstacles,
        backgroundIndex: message.backgroundIndex
      });
    }
    if (message.type === "state" && state.gameMode === "online") {
      if (typeof message.backgroundIndex === "number") {
        state.currentBackgroundIndex = message.backgroundIndex;
      }
      if (Array.isArray(message.obstacles)) {
        state.obstacles = message.obstacles;
      }
      state.versus = {
        localSlot: networkState.localPlayerSlot,
        players: message.players,
        winner: message.winner
      };
      state.bullets = message.bullets;
      state.explosions = message.explosions;
      state.gameOver = message.gameOver;
      updateVersusHud();
    }
  };
}

async function createOnlinePeer(role) {
  closeOnlineConnection();
  syncOnlinePlayerName();
  networkState.role = role;
  networkState.localPlayerSlot = role === "host" ? 1 : 2;
  networkState.remotePlayerSlot = role === "host" ? 2 : 1;
  startOnlineMatchButton.disabled = true;
  networkState.pc = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
  });

  networkState.pc.onicecandidate = () => {
    if (networkState.pc.iceGatheringState === "complete" && networkState.pc.localDescription) {
      onlineLocalSdp.value = JSON.stringify(networkState.pc.localDescription);
    }
  };

  if (role === "host") {
    setupDataChannel(networkState.pc.createDataChannel("tanks-match"));
    const offer = await networkState.pc.createOffer();
    await networkState.pc.setLocalDescription(offer);
    updateOnlineStatus("Host кодът се генерира. Изпрати го на приятеля си.");
  } else {
    networkState.pc.ondatachannel = (event) => setupDataChannel(event.channel);
    updateOnlineStatus("Постави offer кода от host-а и натисни 'Приложи кода'.");
  }
}

async function applyRemoteSdp() {
  if (!networkState.pc || !onlineRemoteSdp.value.trim()) {
    return;
  }

  const description = JSON.parse(onlineRemoteSdp.value.trim());
  await networkState.pc.setRemoteDescription(description);

  if (networkState.role === "join") {
    const answer = await networkState.pc.createAnswer();
    await networkState.pc.setLocalDescription(answer);
    updateOnlineStatus("Генерирах answer код. Изпрати го на host-а.");
  } else {
    updateOnlineStatus("Host получи answer кода. Изчаква се DataChannel.");
  }
}

function sendOnlineInput() {
  if (networkState.connected && networkState.channel && networkState.role === "join") {
    networkState.channel.send(JSON.stringify({ type: "input", input }));
  }
}

function copyControls(source) {
  return {
    up: !!source.up,
    down: !!source.down,
    left: !!source.left,
    right: !!source.right,
    shoot: !!source.shoot,
    placeMine: !!source.placeMine
  };
}

function resetInputs() {
  Object.assign(input, {
    up: false,
    down: false,
    left: false,
    right: false,
    shoot: false,
    placeMine: false
  });
  Object.assign(inputP2, {
    up: false,
    down: false,
    left: false,
    right: false,
    shoot: false,
    placeMine: false
  });
  networkState.remoteInput = copyControls(inputP2);
}

function gameLoop(timestamp) {
  if (!state.lastTime) {
    state.lastTime = timestamp;
  }

  const deltaTime = (timestamp - state.lastTime) / 16.666;
  state.lastTime = timestamp;

  if (state.gameMode === "single") {
    updatePlayer(deltaTime, timestamp);
    updateBullets(deltaTime);
    updateEnemies(deltaTime, timestamp);
    drawScene(timestamp);
  } else if (state.gameMode === "local") {
    updateVersusSimulation(deltaTime, timestamp, input, inputP2);
    drawVersusScene(timestamp);
  } else if (state.gameMode === "online") {
    if (networkState.role === "host") {
      updateVersusSimulation(deltaTime, timestamp, input, networkState.remoteInput);
      if (networkState.connected && networkState.channel && state.versus) {
        const payload = serializeOnlineMatchState();
        if (payload !== networkState.lastSerializedState || state.gameOver) {
          networkState.channel.send(payload);
          networkState.lastSerializedState = payload;
        }
      }
      drawVersusScene(timestamp);
    } else {
      sendOnlineInput();
      drawVersusScene(timestamp, state.versus);
    }
  }

  state.animationFrame = requestAnimationFrame(gameLoop);
}

backButton.addEventListener("click", () => {
  renderCountries();
  showPanel("country");
});

backToModeButton.addEventListener("click", () => {
  resetSetupFlow();
  renderModes();
  showPanel("mode");
});

restartButton.addEventListener("click", () => {
  stopBattleLoopSound();
  cancelAnimationFrame(state.animationFrame);
  closeOnlineConnection();
  resetInputs();
  state.gameOver = false;
  resetSetupFlow();
  renderModes();
  showPanel("mode");
});

backToTankButton.addEventListener("click", () => {
  if (state.gameMode === "local") {
    state.setupSlot = 2;
    renderTanks(state.selections[2]?.factionKey ?? state.selectedFactionKey);
  }
  showPanel("tank");
});

backToSetupButton.addEventListener("click", () => {
  closeOnlineConnection();
  renderWaveOptions();
  showPanel("wave");
});

allyToggleButton.addEventListener("click", () => {
  state.startWithAlly = !state.startWithAlly;
  if (state.startWithAlly && !state.selectedAllyTank) {
    state.selectedAllyTank = factions[state.selectedFactionKey].tanks.find((tank) => tank.id !== state.selectedTank.id)
      ?? factions[state.selectedFactionKey].tanks[0];
  }
  renderWaveOptions();
});

startBattleButton.addEventListener("click", () => {
  enterDesktopFullscreen();
  resetInputs();
  if (state.gameMode === "single") {
    startGame(state.selectedFactionKey, state.selectedTank, state.selectedWaveSize);
    return;
  }

  startVersusMatch(state.selections[1], state.selections[2], 1);
});

hostOnlineButton.addEventListener("click", async () => {
  await createOnlinePeer("host");
});

joinOnlineButton.addEventListener("click", async () => {
  await createOnlinePeer("join");
});

applyRemoteSdpButton.addEventListener("click", async () => {
  try {
    await applyRemoteSdp();
  } catch (error) {
    updateOnlineStatus("Кодът не можа да бъде приложен. Провери дали е копиран изцяло.");
  }
});

copyLocalSdpButton.addEventListener("click", async () => {
  if (!onlineLocalSdp.value.trim()) {
    return;
  }

  try {
    await navigator.clipboard.writeText(onlineLocalSdp.value);
    updateOnlineStatus("Моят код е копиран.");
  } catch (error) {
    onlineLocalSdp.select();
    updateOnlineStatus("Не успях да копирам автоматично. Маркирах кода, за да го копираш ръчно.");
  }
});

onlinePlayerNameInput?.addEventListener("change", () => {
  syncOnlinePlayerName();
});

onlinePlayerNameInput?.addEventListener("blur", () => {
  syncOnlinePlayerName();
});

startOnlineMatchButton.addEventListener("click", () => {
  if (state.gameMode !== "online" || networkState.role !== "host" || !networkState.connected || !networkState.remoteSetup) {
    updateOnlineStatus("Първо се свържи с друг играч и изчакай неговите настройки.");
    return;
  }

  enterDesktopFullscreen();
  resetInputs();
  syncOnlinePlayerName();
  const setup1 = { factionKey: state.selectedFactionKey, tank: state.selectedTank, playerName: state.playerName };
  const setup2 = networkState.remoteSetup;
  const obstacles = generateObstacles();
  pickBattlefieldBackground();

  networkState.channel.send(JSON.stringify({
    type: "start",
    setup1: serializeSelection(setup1),
    setup2: serializeSelection(setup2),
    localSlot: 1,
    obstacles,
    backgroundIndex: state.currentBackgroundIndex
  }));

  startVersusMatch(setup1, setup2, 1, {
    obstacles,
    backgroundIndex: state.currentBackgroundIndex
  });
});

masterVolumeInput.addEventListener("input", (event) => {
  audioSettings.master = Number(event.target.value) / 100;
  updateAudioUi();
});

effectsVolumeInput.addEventListener("input", (event) => {
  audioSettings.effects = Number(event.target.value) / 100;
  updateAudioUi();
});

musicVolumeInput.addEventListener("input", (event) => {
  audioSettings.music = Number(event.target.value) / 100;
  updateAudioUi();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") input.up = true;
  if (event.code === "KeyS") input.down = true;
  if (event.code === "KeyA") input.left = true;
  if (event.code === "KeyD") input.right = true;
  if (state.gameMode !== "local" && event.code === "ArrowUp") {
    event.preventDefault();
    input.up = true;
  }
  if (state.gameMode !== "local" && event.code === "ArrowDown") {
    event.preventDefault();
    input.down = true;
  }
  if (state.gameMode !== "local" && event.code === "ArrowLeft") {
    event.preventDefault();
    input.left = true;
  }
  if (state.gameMode !== "local" && event.code === "ArrowRight") {
    event.preventDefault();
    input.right = true;
  }
  if (event.code === "KeyE") input.placeMine = true;
  if (event.code === "Space") {
    event.preventDefault();
    input.shoot = true;
  }

  if (state.gameMode === "local") {
    if (event.code === "ArrowUp") {
      event.preventDefault();
      inputP2.up = true;
    }
    if (event.code === "ArrowDown") {
      event.preventDefault();
      inputP2.down = true;
    }
    if (event.code === "ArrowLeft") {
      event.preventDefault();
      inputP2.left = true;
    }
    if (event.code === "ArrowRight") {
      event.preventDefault();
      inputP2.right = true;
    }
    if (event.code === "Enter") {
      event.preventDefault();
      inputP2.shoot = true;
    }
    if (event.code === "ShiftRight") inputP2.placeMine = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyW") input.up = false;
  if (event.code === "KeyS") input.down = false;
  if (event.code === "KeyA") input.left = false;
  if (event.code === "KeyD") input.right = false;
  if (state.gameMode !== "local" && event.code === "ArrowUp") input.up = false;
  if (state.gameMode !== "local" && event.code === "ArrowDown") input.down = false;
  if (state.gameMode !== "local" && event.code === "ArrowLeft") input.left = false;
  if (state.gameMode !== "local" && event.code === "ArrowRight") input.right = false;
  if (event.code === "KeyE") input.placeMine = false;
  if (event.code === "Space") input.shoot = false;
  if (event.code === "ArrowUp") inputP2.up = false;
  if (event.code === "ArrowDown") inputP2.down = false;
  if (event.code === "ArrowLeft") inputP2.left = false;
  if (event.code === "ArrowRight") inputP2.right = false;
  if (event.code === "Enter") inputP2.shoot = false;
  if (event.code === "ShiftRight") inputP2.placeMine = false;
});

function setMobileControl(control, isPressed) {
  if (control === "up") input.up = isPressed;
  if (control === "down") input.down = isPressed;
  if (control === "left") input.left = isPressed;
  if (control === "right") input.right = isPressed;
  if (control === "shoot") input.shoot = isPressed;
  if (control === "mine" && isPressed) input.placeMine = true;
}

mobileButtons.forEach((button) => {
  const control = button.dataset.control;
  const startPress = (event) => {
    event.preventDefault();
    setMobileControl(control, true);
  };
  const endPress = (event) => {
    event.preventDefault();
    setMobileControl(control, false);
  };

  button.addEventListener("touchstart", startPress, { passive: false });
  button.addEventListener("touchend", endPress, { passive: false });
  button.addEventListener("touchcancel", endPress, { passive: false });
  button.addEventListener("mousedown", startPress);
  button.addEventListener("mouseup", endPress);
  button.addEventListener("mouseleave", endPress);
});

updateAudioUi();
try {
  onlinePlayerNameInput.value = sanitizePlayerName(localStorage.getItem("tanks-online-player-name"));
} catch (error) {
  onlinePlayerNameInput.value = "Player";
}
syncOnlinePlayerName();
startOnlineMatchButton.disabled = true;
renderModes();
