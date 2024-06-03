class Level {
  enemies;
  endboss;
  clouds;
  backgroundObjects;
  coins;
  bottles;
  level_end_x = 2200;

  /**
    * Constructs a new Level object with the specified arrays of enemies, clouds, background objects, coins, bottles, endbosses, and small chickens.
    * 
    * @param {Enemy} enemies - An array of enemy objects.
    * @param {Cloud} clouds - An array of cloud objects.
    * @param {BackgroundObject} backgroundObjects - An array of background object elements.
    * @param {Coin} coin - An array of coin objects.
    * @param {Bottle} bottle - An array of bottle objects.
    * @param {Endboss} endboss - An array of endboss objects.
    */
  constructor(enemies, endboss, coins, bottles, clouds, backgroundObjects) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.coins = coins;
    this.bottles = bottles;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
  }
}