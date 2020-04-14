class Brick {
  constructor(x, y) {
    this.Pos = {
      x: x,
      y: y,
    };
    this.rec;
    this.Weight = {
      width: 100,
      height: 30,
    };
    this.Extras = {
      Color: color(
        round(random(40, 100)),
        round(random(40, 255)),
        round(random(40, 255)),
        round(random(40, 255))
      ),
      Points: round(random(10)),
    };
  }
  display() {
    noStroke();
    fill(this.Extras.Color);
    rect(this.Pos.x, this.Pos.y, this.Weight.width, this.Weight.height);
  }
  destroy() {
    this.Pos.x = -100000;
  }
}
