class StatusbarCoins extends DrawableObject {
  x = 10;
  y = 40;
  width = 150;
  height = 50;

  IMAGES = [
    'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
    'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
    'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
    'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
    'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
    'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
  ];

  /**
   * Constructs the images and set the percent
   *
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercentage(0);
  }

  /**
   * Set the percentage for the statusbar
   *
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Returns a number based on the precentage
   *
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}