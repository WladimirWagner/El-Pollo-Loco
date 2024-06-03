let level1;

/**
 * Initializes the game level with various game objects including chickens, clouds, background objects, coins, bottles, an end boss, and small chickens.
 */
function initLevel() {

level1 = new Level(
  [
    new Chicken,
    new Chicken,
    new Chicken,
    new Chicken,
    new Chicken,
    new Chicken_small(),
    new Chicken_small(),
    new Chicken_small(),
    new Chicken_small(),
    new Chicken_small()
  ],
  [
    new Endboss()
  ],
  [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin()
  ],
  [
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle()
  ],
  [
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud()
  ],
  [
    new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', -719),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', -719),

    new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 0),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719),

    new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719*2),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 719*2),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 719*2),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 719*2),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719*3),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719*3),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719*3),
    new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719*3),
  ]
);

}