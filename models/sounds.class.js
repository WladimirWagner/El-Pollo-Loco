class AudioManager {
  constructor() {
    this.coin_sound = new Audio('audio/coin.mp3');
    this.bottle_sound = new Audio('audio/bottle.mp3');
    this.kill_sound = new Audio('audio/kill_enemy.mp3');
    this.throwing_sound = new Audio('audio/throw.mp3');
    this.walking_sound = new Audio('audio/walking.mp3');
    this.jumping_sound = new Audio('audio/jump.mp3');
    this.hurt_sound = new Audio('audio/hurt_sound.mp3');
    this.endboss_sound = new Audio('audio/chicken_boss.mp3');
    this.endboss_alert_sound = new Audio('audio/endboss_alert.mp3');
  }

  playCoinSound() {
    this.coin_sound.play();
  }

  playBottleSound() {
    this.bottle_sound.play();
  }

  playKillSound() {
    this.kill_sound.play();
  }

  playThrowingSound() {
    this.throwing_sound.play();
  }

  playWalkingSound() {
    this.walking_sound.play();
  }

  playJumpingSound() {
    this.jumping_sound.play();
  }

  playHurtedSound() {
    this.hurt_sound.play();
  }

  playEndbossSound() {
    this.endboss_sound.play();
  }

  playEndbossAlertSound() {
    this.endboss_alert_sound.play();
  }

  stopCoinSound() {
    this.coin_sound.pause();
  }

  stopBottleSound() {
    this.bottle_sound.pause();
  }

  stopKillSound() {
    this.kill_sound.pause();
  }

  stopThrowingSound() {
    this.throwing_sound.pause();
  }

  stopWalkingSound() {
    this.walking_sound.pause();
  }

  stopJumpingSound() {
    this.jumping_sound.pause();
  }

  stopHurtedSound() {
    this.hurt_sound.pause();
  }

  stopEndbossSound() {
    this.endboss_sound.pause();
  }

  stopEndbossAlertSound() {
    this.endboss_alert_sound.pause();
  }

  muteGameSounds() {
    this.coin_sound.muted = true;
    this.bottle_sound.muted = true;
    this.kill_sound.muted = true;
    this.throwing_sound.muted = true;
    this.walking_sound.muted = true;
    this.jumping_sound.muted = true;
    this.hurt_sound.muted = true;
    this.endboss_sound.muted = true;
    this.endboss_alert_sound.muted = true;
  }

  unmuteGameSounds() {
    this.coin_sound.muted = false;
    this.bottle_sound.muted = false;
    this.kill_sound.muted = false;
    this.throwing_sound.muted = false;
    this.walking_sound.muted = false;
    this.jumping_sound.muted = false;
    this.hurt_sound.muted = false;
    this.endboss_sound.muted = false;
    this.endboss_alert_sound.muted = false;
  }
}