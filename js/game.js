let canvas;
let world;
let keyboard = new Keyboard();
let isMuted = false;

let game_sound = new Audio('audio/pollo_loco_music.mp3');
let win_sound = new Audio('audio/win_music.mp3');
let lose_sound = new Audio('audio/lose_music.mp3');

/**
 * Initializes the canvas.
 */
function init() {
  startLevel();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  mobileButtons();
}

/**
 * Listens for keydown events and sets corresponding keyboard input flags.
 */
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    keyboard.RIGHT = true;
  }
  if (event.key === 'ArrowLeft') {
    keyboard.LEFT = true;
  }
  if (event.key === 'ArrowUp') {
    keyboard.UP = true;
  }
  if (event.key === 'ArrowDown') {
    keyboard.DOWN = true;
  }
  if (event.key === ' ') {
    keyboard.SPACE = true;
  }
  if (event.key === 'd') {
    keyboard.THROW = true;
  }
});

/**
 * Listens for keyup events and resets corresponding keyboard input flags.
 * 
 * @param {Event} e - The keyup event object.
 */
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    keyboard.RIGHT = false;
  }
  if (event.key === 'ArrowLeft') {
    keyboard.LEFT = false;
  }
  if (event.key === 'ArrowUp') {
    keyboard.UP = false;
  }
  if (event.key === 'ArrowDown') {
    keyboard.DOWN = false;
  }
  if (event.key === ' ') {
    keyboard.SPACE = false;
  }
  if (event.key === 'd') {
    keyboard.THROW = false;
  }
});

/**
 * Sets up event listeners for touch events on mobile.
 */
function mobileButtons() {
  document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById('btnLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById('btnRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById('btnRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById('btnJump').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById('btnJump').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
  document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.THROW = true;
  });
  document.getElementById('btnThrow').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.THROW = false;
  });
}

/**
 * initialise the level
 */
function startLevel() {
  initLevel();
}

/**
 * Starts the game, hides the start button and initializes the game world and level.
 */
function startGame() {
  let startScreen = document.getElementById('startScreen');
  let endScreenWin = document.getElementById('endScreenWin');
  let endScreenLose = document.getElementById('endScreenLose');
  init();
  game_sound.play();
  startScreen.style.display = 'none';
  endScreenWin.style.display = 'none';
  endScreenLose.style.display = 'none';
}

/**
 * Restarts the game after game over and hides the game over message
 */
function restartGame() {
  clearAllIntervals();
  pauseSounds();

  let endScreenWin = document.getElementById('endScreenWin');
  let endScreenLose = document.getElementById('endScreenLose');
  let startScreen = document.getElementById('startScreen');
  let instructions = document.getElementById('instructions');

  endScreenWin.style.display = 'none';
  endScreenLose.style.display = 'none';
  instructions.style.display = 'none';
  startScreen.style.display = 'none';

  init();
  game_sound.play();
}

/**
 * go to the menu
 */
function goToMenu() {
  clearAllIntervals();
  pauseSounds();

  let startScreen = document.getElementById('startScreen');
  let endScreenWin = document.getElementById('endScreenWin');
  let endScreenLose = document.getElementById('endScreenLose');
  let instructions = document.getElementById('instructions');

  endScreenWin.style.display = 'none';
  endScreenLose.style.display = 'none';
  instructions.style.display = 'none';
  startScreen.style.display = 'block';
}

/**
 * pause game sounds
 */
function pauseSounds() {
  game_sound.pause();
  game_sound.currentTime = 0;
  win_sound.pause();
  win_sound.currentTime = 0;
  lose_sound.pause();
  lose_sound.currentTime = 0;
}

/**
 * open the Win Screen
 */
function openWinScreen() {
  clearAllIntervals();
  game_sound.pause();
  win_sound.play();
  let endScreenWin = document.getElementById('endScreenWin');
  endScreenWin.style.display = 'flex';
}

/**
 * open the Lose Screen
 */
function openLoseScreen() {
  clearAllIntervals();
  game_sound.pause();
  lose_sound.play();
  let endScreenLose = document.getElementById('endScreenLose');
  endScreenLose.style.display = 'flex';
}

/**
 * open the instructions
 */
function openInstructions() {
  let instructions = document.getElementById('instructions');
  instructions.style.display = 'flex';
}

/**
 * close the Lose Screen
 */
function closeInstructions() {
  let instructions = document.getElementById('instructions');
  instructions.style.display = 'none';
}

/**
 * Clears all active intervals in the window.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

/**
 * Mutes and unmutes the game
 * 
 */
function toggleMute() {
  const muteButton = document.querySelector('.button-mute');
  const img = muteButton.querySelector('img');
  const mobileMuteBtn = document.getElementById('muteBtn');

  if (!isMuted) {
    img.src = './img_pollo_locco/img/lautsprecher.png';
    mobileMuteBtn.innerHTML = 'UNMUTE';
    game_sound.muted = true;
    win_sound.muted = true;
    lose_sound.muted = true;
    world.audioManager.muteGameSounds();
    world.character.audioManager.muteGameSounds();
    world.level.endboss.forEach(endboss => {
      endboss.audioManager.muteGameSounds();
    });
    isMuted = true;
  } else {
    img.src = './img_pollo_locco/img/lautsprecher-aus.png';
    mobileMuteBtn.innerHTML = 'MUTE';
    game_sound.muted = false;
    win_sound.muted = false;
    lose_sound.muted = false;
    world.audioManager.unmuteGameSounds();
    world.character.audioManager.unmuteGameSounds();
    world.level.endboss.forEach(endboss => {
      endboss.audioManager.unmuteGameSounds();
    });
    isMuted = false;
  }
}

/**
 * Checks the orientation of the display
 * If the width is under 1200px the user has to turn his phone
 */
function checkOrientation() {
  const landscapeScreen = document.getElementById('landscapeScreen');
  const gameContainer = document.querySelector('.game-container');
  const overlay = document.querySelector('.overlay');
  const muteBtn = document.querySelector('.button-mute');

  if (window.innerWidth < 1200 && window.innerHeight < window.innerWidth) {
    landscapeScreen.style.display = 'none';
    muteBtn.style.display = 'none';
    gameContainer.style.display = 'block';
    overlay.style.display = 'flex';
  } else if (window.innerWidth < 1200 && window.innerHeight > window.innerWidth) {
    landscapeScreen.style.display = 'flex';
    muteBtn.style.display = 'none';
    gameContainer.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    landscapeScreen.style.display = 'none';
    muteBtn.style.display = 'block';
    gameContainer.style.display = 'block';
    overlay.style.display = 'none';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('load', checkOrientation);
