var ground1, hero1, block1;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
    ground = createSprite(1500,400,20,100)

    hero1 = new hero(750,200);

    block1 = new block(200,200);
}

function draw() {
  background(0);
 drawSprites();
hero1.display();
block1.display();
}

