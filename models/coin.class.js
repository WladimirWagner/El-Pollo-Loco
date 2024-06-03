class Coin extends CollactableObjects {
  width = 120;
  height = 120;

  IMAGES = [
    'img_pollo_locco/img/8_coin/coin_1.png',
    'img_pollo_locco/img/8_coin/coin_2.png'
  ];

  constructor() {
    super().loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.animate();
    this.x = 250 + Math.random() * 1800;
    this.y = 50 + Math.random() * 300;
  }

  animate() {
    this.coinBlink();
    this.coinBounce();
  }

  coinBlink() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 250);
  }

  coinBounce() {
    setInterval(() => {
      this.y += 8;
      setTimeout(() => {
        this.y -= 8;
      }, 100);   
    }, 500);
  }
}