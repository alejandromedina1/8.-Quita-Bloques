class Block {
    constructor(x,y) {
        this.x = x;
        this.y =y;
    }
    draw(){
        rectMode(CENTER);
        rect(this.x+50,this.y+20,50,20);
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