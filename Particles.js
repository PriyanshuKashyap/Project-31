class Particles {
    constructor(x, y, r) {
        var options = {
            isStatic: false//???????????
        }

        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        //Body.setStatic(this.body, false);
    }

    display() {
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
    }
}