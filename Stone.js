class Stone{
	constructor(x,y,w,h)

	{
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		density:12,
		friction:0.9
	}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
            var angle = this.body.angle		
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate(angle)
            angleMode(RADIANS)
			rectMode(CENTER)
			strokeWeight(5);
			stroke("red");
			fill("orange");
			//draw the ellipse here to display the rubber ball
rect(0,0,this.w,this.h);
			pop()
	}

}