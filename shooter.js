function Shooter() {
	
	this.x = width / 2;
	this.y = height - 10;
	this.move = 0;
	
	this.update = function() {
		this.x += this.move;
		triangle(this.x -10, this.y,
				this.x, this.y - 10,
				this.x + 10, this.y);

		if (this.x >= width - 20) { this.x = width - 20; }
		if (this.x <= 20) { this.x = 20; }
	}

	this.hit = function(ball) {
		var d = dist(ball.x, ball.y, this.x, this.y);
		if (d < 10) {
			return true;
		} else {
			return false;
		}
	}
}

function Pea() {
	this.x = ship.x - 10;
	this.y = height - 20;
	this.w = 20;
	this.h = 20;
	
	this.shoo = function() {
		this.y -= 10;
		rect(this.x, this.y, this.w, this.h);
		this.w -= 0.33;
		this.h -= 0.33;
	}
	
	this.hit = function(ball) {
		var d = dist(ball.x, ball.y, this.x + 10, this.y + 10);
		if (d < 10 + 10) {
			return true;
		} else {
			return false;
		}
	}
}
