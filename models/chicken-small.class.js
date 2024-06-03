class Chicken_small extends MovableObject {
  y = 370;
  width = 50;
  height = 50;
  IMAGES_WALKING = [
    'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
  ];

  IMAGES_DEAD = [
    'img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
  ];

  chicken_sound = new Audio('audio/chicken.mp3');
  intervalMove;
  
  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 400 + Math.random() * 1200;
    this.speed = 0.3 + Math.random() * 0.9;
    this.animate();
  }

   /**
   * animate chicken
   * 
   */
  animate() {
    this.smallChickenMoving();
    this.smallChickenAnimation();
  }

  /**
   * animate moving left chicken
   * 
   */
  smallChickenMoving() {
    this.intervalMove = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }

  /**
   * checks if chicken is dead 
   * 
   */
  smallChickenAnimation() {
    let intervalDead = setInterval(() => {
      if (this.isDead()) {
        clearInterval(this.intervalMove);
        this.playAnimation(this.IMAGES_DEAD);
        clearInterval(intervalDead);
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 160);
  }
}