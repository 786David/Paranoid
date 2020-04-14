class BouncyPad {
  constructor() {
    this.Weight = {
      width: 150,
      height: 15,
    };
    this.Pos = {
      x: width / 2,
      y: height - 30,
    };
    this.Extras = {
      Score: 0,
      Color: color(255, 255, 255),
      Speed: 20,
    };
  }
  display() {
    fill(this.Extras.Color);
    rectMode(CENTER);
    rect(this.Pos.x, this.Pos.y, this.Weight.width, this.Weight.height);
  }
  update() {
    if (keyIsDown(LEFT_ARROW))
      this.Pos.x -= this.Extras.Speed * (deltaTime / 50);
    else if (keyIsDown(RIGHT_ARROW))
      this.Pos.x += this.Extras.Speed * (deltaTime / 50);

    if (this.Pos.x > width + this.Weight.width)
      this.Pos.x = 0 - this.Weight.width;
    else if (this.Pos.x < 0 - this.Weight.width)
      this.Pos.x = width + this.Weight.width;
  }
  run() {
    this.display();
    this.update();
  }
}
