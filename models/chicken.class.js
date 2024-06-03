class Chicken extends MovableObject {
  y = 353;
  width = 70;
  height = 70;
  IMAGES_WALKING = [
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'

  ];

  IMAGES_DEAD = [
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
  ];

  chicken_sound = new Audio('audio/chicken_sounds.mp3');
  intervalMove;
  
  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 1100 + Math.random() * 1100;
    this.speed = 0.4 + Math.random() * 1;
    this.animate();
  }

   /**
   * animate chicken
   * 
   */
  animate() {
    this.chickenMoving();
    this.chickenAnimation();
  }

  /**
   * animate moving left chicken
   * 
   */
  chickenMoving() {
    this.intervalMove = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }

  /**
   * checks if chicken is dead 
   * 
   */
  chickenAnimation() {
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