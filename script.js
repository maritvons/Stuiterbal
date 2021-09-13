class Ball{
  
  constructor(x, y, w, h, vx, vy, _color){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color
  }

  drawBall() {   
    
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x <= 0 || this.x >= 400){
      this.vx = this.vx * -1;
    }

    if(this.y <= 0 || this.y >= 300){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3;

function setup() {
  createCanvas(400, 300);

  ball1 = new Ball(30, 200, 50, 50, 5, 5, "pink");
  ball2 = new Ball(120, 210, 50, 50, 3, 3, "purple");
  ball3 = new Ball(200, 150, 50, 50, 1, 1, "yellow");

}

function draw() {
  background(225);

  ball1.drawBall();
  ball2.drawBall();
  ball3.drawBall();
}