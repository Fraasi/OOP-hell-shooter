function Ball(x, y) {
	
	this.x = x || random(0, width);
	this.y = y || random(0, height / 3);
	this.bx = random() < 0.5;
	this.by = random() < 0.5;
	this.speedX = random(0, 3);
	this.speedY = random(0, 3);
	this.size = 10;
	
	this.update = function() {

	ellipse(this.x, this.y, this.size, this.size);
		if (this.x >= width || this.x <= 0) { this.bx = !this.bx;}
		if (this.y >= height || this.y <= 0) { this.by = !this.by;}
			
		if (this.bx) { this.x += this.speedX; } else { this.x -= this.speedX };
		if (this.by) { this.y += this.speedY; } else { this.y -= this.speedY };
	}
	
	this.explode = function() {
		for (var i = 0; i < 5; i++) {
			var p = new Ball(this.x, this.y);
			particles.push(p);
		}
	}
	
	this.explShow = function() {
		this.x += random(-10,10);
		this.y += random(-10,10);
		for (var e = particles.length - 1; e >= 0; e--) {
			ellipse(this.x, this.y, this.size / 2, this.size / 2);
			this.size -= 0.1;
			if (this.size <= 0) {
				particles.splice(e, 1);
			}
		}
	}
}