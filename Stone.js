class Stone {
    constructor(x, y) {
      var options = {
        'restitution':0.5,
        'friction': 1.0,
        'density':4
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 70;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('darkred')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };