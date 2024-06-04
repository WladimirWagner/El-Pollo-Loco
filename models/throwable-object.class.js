class ThrowableObject extends MovableObject{
  width = 60;
  height = 50;
  isBroken = false;

  IMAGES_BOTTLE_ROTATION = [
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ];

  IMAGES_BOTTLE_SPLASH = [
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
  ];

throwInterval;
bottleInterval;

  /**
   * Constructs a salsa bottle object, loads initial images, and sets initial properties including position and size.
   * Initializes properties for bottle rotation and splash animations.
   *
   * @param {number} x - The x-coordinate of the salsa bottle.
   * @param {number} y - The y-coordinate of the salsa bottle.
   */
  constructor(x, y) {
    super().loadImage('img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.x = x;
    this.y = y;
    this.throw();
    this.animate();
  }

  /**
   * Throws bottle.
   */
  throw() {
    this.speedY = 15;
    this.applyGravity();
    this.throwInterval = setInterval(() => {
    this.bottleHitsTheGround();
      if (this.isBroken) {
          this.stopBottle();
      } else {
          this.x += 10;
      }
    }, 1000/60);
  }
  
  /** 
  * Stops the bottle animation.
  */
  stopBottle() {
    clearInterval(this.applyGravityInterval);
    clearInterval(this.throwInterval);
  }
  
  /** 
  * Checks if the bottle falls on the sand.
  */
  bottleHitsTheGround() {
    if (this.y >= 360) {
      this.isBroken = true;
      setTimeout(() => {
        this.x = -5000;
      }, 100);
    }
  }

   /** 
  * Checks if the bottle hits an enemy
  */
  bottleHitsEnemy() {
    world.enemies.forEach(enemy => {
      if (this.isColliding(enemy)) {
        this.isBroken = true;
      }
    });
  } 

  /**
  * Animates the bottle. 
  */
  animate() {
    this.bottleInterval = setInterval(() => {
      if (this.isBroken && this.isAboveGround()) {
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
      } else {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
      }
    }, 50);
  }
}