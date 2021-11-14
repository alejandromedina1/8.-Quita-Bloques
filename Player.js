class Player {
    constructor() {
        this.x = 200;
        this.y = 375;
    }
    draw() {
        rectMode(CENTER);
        rect(this.x, this.y, 80, 20);
        rectMode(CORNER);
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
}