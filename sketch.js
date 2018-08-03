var ballCount = 5;
var ship;
var balls = [];
var peas = [];
var particles = [];
var kills = 0;
var level;
var inst = 'Arrow keys to move and shoot. Space to start new game.';
var title = 'OOP hell shooter';

function setup() {	
	createCanvas(500, 500);
	stroke('rgba(255,255,255,1)')
	noFill();
	textFont("Georgia");
	textSize(15);
	ship = new Shooter();
	newLevel();
	noLoop();
}

function draw() {
	background(51);
	
	balls.forEach( ball => { 
		ball.update();
		if (ship.hit(ball)) {
			push();
			textSize(50);
			textAlign(CENTER);
			text("You're dead!", width/2, height/2);
			pop();
			noLoop();
		}
	});
	
	for (var p = peas.length -1; p >= 0; p--) {		
		if (peas[p].y <= 30) {
			peas.splice(p, 1);
		}
	}
	
	for (var p = peas.length -1; p >= 0; p--) {
		peas[p].shoo();	
		for (var b = balls.length -1; b >= 0; b--) {
			if (peas[p].hit(balls[b])) {
				balls[b].explode();
				kills++;
				peas.splice(p, 1);
				balls.splice(b, 1);

				if (balls.length === 0) {
					ballCount += 5;
					newLevel();
				}
				break;
			}	
		}
	}
	
	for (var e = particles.length - 1; e >= 0; e--) {
		if (particles[e] !== undefined && particles.length > 0) {
			particles[e].explShow();
		}
	}
	
	ship.update();
	scoreBoard();
}

function newLevel() {
	for (var i = 0; i < ballCount; i++) {
		balls.push(new Ball());
	}
	level = ballCount;
}

function scoreBoard() {
	var s = 'Kills: ' + kills;
	var l = 'Balls: ' + level;
	push();
	fill(255);
	text(l, 15, 30)
	text(s, 15, 50)
	text(inst, 100, 20);
	pop();
	push();
	textSize(30);
	textAlign(CENTER);
	text(title, 275, 55);
	pop();
}

function keyReleased() {
	ship.move = 0;
}

function keyPressed(e) {
	if (e.key === 'ArrowLeft') {
		ship.move = -5;
	} else if (e.key === 'ArrowRight') {
		ship.move = +5;
	} else if (e.key === 'ArrowUp') {
		peas.push(new Pea());
	}else if (e.key === ' ') {
		balls = [];
		ballCount = 5;
		kills = 0;
		setup();
		loop();
	}
}

