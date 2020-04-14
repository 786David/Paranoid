class Ball {
  constructor(Player, Bricks) {
    this.Pos = createVector(width / 2, height / 2);
    this.Radius = 10;
    this.Speed = createVector(oneOf(-5, 5, 3, 3), oneOf(-5, 5, 3, 3));
    this.Extras = {
      Color: color(255),
      Score: 0,
      ScoreCol: color(255),
    };
    this.Player = Player;
    this.Bricks = Bricks;
  }
  display() {
    noStroke();
    fill(this.Extras.Color);
    circle(this.Pos.x, this.Pos.y, this.Radius * 2);
  }
  update() {
    this.Pos.x += this.Speed.x;
    this.Pos.y += this.Speed.y;
  }
  Win() {
    textSize(70);
    textFont("Random");
    noStroke();
    fill(255);
    text("YOU WIN!!", width / 2 - 185, height / 2);
    let ResetBtn = createButton("Reset");
    ResetBtn.position(width / 2 - 50, height / 2 + 50);
    ResetBtn.style("background-color", "rgb(255, 255, 255)");
    ResetBtn.style("border-color", "rgb(255, 255, 255)");
    ResetBtn.style("width", "100px");
    ResetBtn.style("font-style", "italic");
    ResetBtn.style("border-radius", "10px");
    ResetBtn.mousePressed(() => {
      location.reload();
    });
  }
  Die() {
    this.Player.Extras.Color = color(255, 0, 0);
    this.Extras.Color = color(255, 0, 0);
    textSize(70);
    textFont("Random");
    noStroke();
    fill(255, 0, 0);
    text("YOU DIED!!", width / 2 - 185, height / 2);
    let ResetBtn = createButton("Reset");
    ResetBtn.position(width / 2 - 50, height / 2 + 50);
    ResetBtn.style("background-color", "rgb(255, 0, 0)");
    ResetBtn.style("border-color", "rgb(255, 0, 0)");
    ResetBtn.style("width", "100px");
    ResetBtn.style("font-style", "italic");
    ResetBtn.style("border-radius", "10px");
    ResetBtn.mousePressed(() => {
      location.reload();
    });
  }
  collision() {
    //Regular collision
    if (this.Pos.x >= width - this.Radius || this.Pos.x <= this.Radius)
      this.Speed.x = -this.Speed.x;
    //Win
    else if (this.Pos.y <= this.Radius && Bricks.length == 0) {
      this.Win();
      this.Speed.x = 0;
      this.Speed.y = 0; //Death
    } else if (this.Pos.y <= this.Radius && this.Bricks.length != 0) {
      this.Speed.x = -this.Speed.x;
      this.Speed.y = -this.Speed.y; //Death
    } else if (this.Pos.y >= height - this.Radius) {
      this.Die();
      this.Speed.x = 0;
      this.Speed.y = 0; //Player ball collision
    } else if (
      this.Pos.x >= this.Player.Pos.x - this.Player.Weight.width / 2 &&
      this.Pos.x <= this.Player.Pos.x + this.Player.Weight.width / 2 &&
      this.Pos.y >= this.Player.Pos.y - this.Player.Weight.height / 2 &&
      this.Pos.y <= this.Player.Pos.y + this.Player.Weight.height / 2
    )
      this.Speed.y = -this.Speed.y;
    for (let i = 0; i < this.Bricks.length; i++) {
      if (
        this.Pos.x >= this.Bricks[i].Pos.x &&
        this.Pos.x <= this.Bricks[i].Pos.x + this.Bricks[i].Weight.width &&
        this.Pos.y >= this.Bricks[i].Pos.y &&
        this.Pos.y <= this.Bricks[i].Pos.y + this.Bricks[i].Weight.height
      ) {
        this.Speed.y = -this.Speed.y;
        this.Bricks[i].destroy();
        this.Extras.Score += this.Bricks[i].Extras.Points;
      }
    }
  }
  score() {
    textSize(50);
    1;
    textFont("Random");
    noStroke();
    fill(this.Extras.ScoreCol);
    text(`Score: ${this.Extras.Score}`, width - 200, 50);
  }
  run() {
    this.display();
    this.update();
    this.collision();
    this.score();
  }
}
