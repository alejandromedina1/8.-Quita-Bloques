let player = new Player();
let ball = new Ball();
let blocks = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 24; i++) {
    blocks.push(new Array(24));
  }
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 4; column++) {
      blocks [row][column]= new Block(60*row,40*column);
    }
  }
}

function draw() {
  background(220);
  player.draw();
  ball.draw();
  ball.movement();
  if (player.getX()-40 < ball.getX() && ball.getX() < player.getX()+40&&
    player.getY()-10 < ball.getY()&& ball.getY() < player.getY()+10) {
    ball.setAy(-ball.getAy());
  }
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 4; column++) {
      blocks[row][column].draw();
      if (blocks[row][column].getX()-25) {
        
      }
    }
  }
}

function keyPressed(){
  if (key === "a" || key === "A") {
    player.setX(player.getX()-40);
  }
  if (key === "d" || key === "D") {
    player.setX(player.getX()+40);
  }
}
