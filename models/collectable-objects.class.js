class CollactableObjects extends MovableObject {
  y = 355;

  constructor() {
    super();
    this.x = 400 + Math.random() * 1500;
  }
}