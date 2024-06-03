class Endboss extends MovableObject {
  y = 40;
  width = 300;
  height = 400;
  endboss_sound = new Audio('audio/chicken_boss.mp3');
  endboss_alert_sound = new Audio('audio/endboss_alert.mp3');

  IMAGES_WALKING = [
    'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
  ];

  IMAGES_ALERT = [
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
  ];

  IMAGES_ATTACK = [
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png'

  ];

  IMAGES_HURT = [
    'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png'
  ];

  IMAGES_DEAD = [
    'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
    'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
  ];

  intervalAnimationEndboss;
  intervalAttack;

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2600;
    this.speed = 0.2;
    this.animate();
  }

   /**
    * animates the endboss
    */
  animate() {
    let intervalAnimationEndboss = setInterval(() => {
      this.endbossMoving();
      this.endbossAnimation();
    }, 100);
  }

   /**
     * Manages the animation of the boss character based on its health and interactions.
     * Plays appropriate animation frames for boss attack, being hit, or being dead.
     */
  endbossAnimation() {
    this.endbossIsAlert();
    if (this.isDead()) {
      this.endbossDied();
      openWinScreen();
    } else if (this.isHurt() && this.energy <= 80) {
      this.endbossIsHurt();
    } else if (this.energy <= 80 && !this.isDead()) {
      this.endbossAttacks();
    }
  }

  /**
   * moving animations endboss
   * 
   */
  endbossMoving() {
    this.endboss_alert_sound.pause();
    this.moveLeft();
    this.playAnimation(this.IMAGES_WALKING);
  }

  /**
   * alert animations endboss
   * 
   */
  endbossIsAlert() {
    if (world.endbossAlert === true) {
      this.endboss_alert_sound.play();
      this.speed = 0;
      this.playAnimation(this.IMAGES_ALERT);
    }
  }

  /**
   * hurted animations endboss
   * 
   */
  endbossIsHurt() {
    this.endboss_alert_sound.pause();
    this.endboss_sound.play();
    this.speed = 15;
    this.moveLeft();
    this.playAnimation(this.IMAGES_HURT);
  }

   /**
   * attack animation endboss
   * 
   */
  endbossAttacks() {
    this.endboss_alert_sound.pause();
    this.speed = 25;
    this.moveLeft();
    this.playAnimation(this.IMAGES_ATTACK);
  }

   /**
   * dead animations endboss
   * 
   */
  endbossDied() {
    this.endboss_alert_sound.pause();
    this.endboss_sound.pause();
    this.speed = 0;
    this.playAnimation(this.IMAGES_DEAD);
  }
}