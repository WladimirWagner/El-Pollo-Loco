class DrawableObject {
  x = 120;
  y = 280;
  width = 100;
  height = 150;
  img;
  imageCache = {};
  currentImage = 0;

  /**
   * loads image
   * 
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * draws on canvas
   * 
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * load images
   * 
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}