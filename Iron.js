class Iron {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction': 3,
        'density':30
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };