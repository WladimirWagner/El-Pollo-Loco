class Cloud extends MovableObject {
  width = 250;
  height = 150;

  constructor() {
    super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');
    this.x = Math.random() * 2400;
    this.animate();
    this.y = 10 + Math.random() * 30;
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60); 
  };
}