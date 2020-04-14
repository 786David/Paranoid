let PlayerPad;
let ball;
let Bricks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 3; y++) {
      Bricks.push(new Brick(x * 100, y * 30));
    }
  }
  PlayerPad = new BouncyPad();
  ball = new Ball(PlayerPad, Bricks);
}

function draw() {
  background(0);
  for (let j = 0; j < Bricks.length; j++) {
    Bricks[j].display();
  }
  PlayerPad.run();
  ball.run();
}
