class Ball {
    constructor() {
        this.x = 200;
        this.y = 360;
        this.ax = 3;
        this.ay = 3;
    }
    draw() {
        fill(255, 0, 0);
        ellipse(this.x+this.ax, this.y+this.ay, 25, 25);
        fill(255);
    }
    movement() {
        ball.setX(ball.getX()-this.ax);
        ball.setY(ball.getY()-this.ay);
        if (ball.getX()<0 || 400 < ball.getX() ) {
            ball.setAx(-ball.getAx());
        }
        if ( ball.getY() < 0) {
            ball.setAy(-ball.getAy());
        }
    }
    getX() {
        return this.x;
    }
    setX(px) {
        this.x = px;
    }
    getY() {
        return this.y;
    }
    setY(py) {
        this.y = py;
    }
    getAx() {
        return this.ax;
    }
    setAx(pAx) {
        this.ax = pAx;
    }
    getAy() {
        return this.ay;
    }
    setAy(pAy) {
        this.ay = pAy;
    }
}