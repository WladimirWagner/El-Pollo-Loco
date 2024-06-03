class MovableObject extends DrawableObject {
  speed = 0.15;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  otherDirection = false;
  applyGravityInterval;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  /**
   * Apply simple gravaty to the game with the help of an acceleration
   *
   */
  applyGravity() {
    this.applyGravityInterval = setInterval(() => {
      if(this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  } 

  /**
   * Checks if an object is above the ground
   *
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 130;
    }
  }

  /**
   * Checks if the object is above the ground level.
   * 
   * @returns {boolean} True if the object is above the ground, false otherwise.
   */
  isColliding(mo) { 
    return this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
          this.y + this.height - this.offset.bottom >= mo.y + mo.offset.top &&
          this.x + this.offset.left <= mo.x + mo.height - mo.offset.right &&
          this.y + this.offset.top <= mo.y + mo.width - mo.offset.bottom;
  }

  /**
   * Plays an animation based on images
   *
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Objects moves right
   *
   */
  moveRigth() {
    this.x += this.speed;
  }

  /**
   * Objects moves left
   *
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Objects jumps
   *
   */
  jump() {
    this.speedY = 25;
  }

  /**
   * Checks when the object was hitted and subtract energy
   *
   */
  hit() {
    let currentTime = new Date().getTime();
    if (currentTime - this.lastHit > 500) {
      this.energy -= 20;
      if (this.energy < 0) {
        this.energy = 0;
      } else {
        this.lastHit = currentTime;
      }
      this.x -= 20;
    }
  }

  /**
   * Checks when the objects was hitted and subtract energy
   *
   */
  hitByEndboss() {
    this.energy -= 100;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Puts the energy number to 0
   *
   */
  killTheEnemy() {
    this.energy = 0;
  }

  /**
   * Checks when the objects was hitted and subtract energy
   *
   */
  hitEndboss() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is hitted
   *
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.7;
  }

  /**
   * Returns energy of 0
   *
   */
  isDead() {
    return this.energy == 0;
  }
}