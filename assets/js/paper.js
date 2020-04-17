var circles = [];

function onKeyDown(event) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle({
		center: point,
		radius: 500
	});
	circles.push(newCircle);
	switch (event.key) {
		case 'a':
			newCircle.fillColor = '#d89af2';
			new Howl({
				src: [ 'assets/sounds/bubbles.mp3' ]
			}).play();
			break;
		case 'b':
			newCircle.fillColor = '#74c25a';
			new Howl({
				src: [ 'assets/sounds/clay.mp3' ]
			}).play();
			break;
		case 'c':
			newCircle.fillColor = '#1586af';
			new Howl({
				src: [ 'assets/sounds/confetti.mp3' ]
			}).play();
			break;
		case 'd':
			newCircle.fillColor = '#100acf';
			new Howl({
				src: [ 'assets/sounds/corona.mp3' ]
			}).play();
			break;
		case 'e':
			newCircle.fillColor = '#128aff';
			new Howl({
				src: [ 'assets/sounds/dotted-spiral.mp3' ]
			}).play();
			break;
		case 'f':
			newCircle.fillColor = '#fab224';
			new Howl({
				src: [ 'assets/sounds/flash-1.mp3' ]
			}).play();
			break;
		case 'g':
			newCircle.fillColor = '#aa7532';
			new Howl({
				src: [ 'assets/sounds/flash-2.mp3' ]
			}).play();
			break;
		case 'h':
			newCircle.fillColor = '#12acff';
			new Howl({
				src: [ 'assets/sounds/flash-3.mp3' ]
			}).play();
			break;
		case 'i':
			newCircle.fillColor = 'green';
			new Howl({
				src: [ 'assets/sounds/glimmer.mp3' ]
			}).play();
			break;
		case 'j':
			newCircle.fillColor = 'red';
			new Howl({
				src: [ 'assets/sounds/moon.mp3' ]
			}).play();
			break;
		case 'k':
			newCircle.fillColor = 'blue';
			new Howl({
				src: [ 'assets/sounds/pinwheel.mp3' ]
			}).play();
			break;
		case 'l':
			newCircle.fillColor = 'white';
			new Howl({
				src: [ 'assets/sounds/piston-1.mp3' ]
			}).play();
			break;
		case 'm':
			newCircle.fillColor = 'yellow';
			new Howl({
				src: [ 'assets/sounds/piston-2.mp3' ]
			}).play();
			break;
		case 'n':
			newCircle.fillColor = 'orange';
			new Howl({
				src: [ 'assets/sounds/piston-3.mp3' ]
			}).play();
			break;
		case 'o':
			newCircle.fillColor = '#26a6ff';
			new Howl({
				src: [ 'assets/sounds/prism-1.mp3' ]
			}).play();
			break;
		case 'p':
			newCircle.fillColor = '#258acf';
			new Howl({
				src: [ 'assets/sounds/prism-2.mp3' ]
			}).play();
			break;
		case 'q':
			newCircle.fillColor = '#ff558aa';
			new Howl({
				src: [ 'assets/sounds/prism-3.mp3' ]
			}).play();
			break;
		case 'r':
			newCircle.fillColor = '#236aaa';
			new Howl({
				src: [ 'assets/sounds/splits.mp3' ]
			}).play();
			break;
		case 's':
			newCircle.fillColor = '#99aacc';
			new Howl({
				src: [ 'assets/sounds/squiggle.mp3' ]
			}).play();
			break;
		case 't':
			newCircle.fillColor = '#521ffa';
			new Howl({
				src: [ 'assets/sounds/strike.mp3' ]
			}).play();
			break;
		case 'u':
			newCircle.fillColor = '#745acf';
			new Howl({
				src: [ 'assets/sounds/suspension.mp3' ]
			}).play();
			break;
		case 'v':
			newCircle.fillColor = '#abcdef';
			new Howl({
				src: [ 'assets/sounds/timer.mp3' ]
			}).play();
			break;
		case 'w':
			newCircle.fillColor = '#123789';
			new Howl({
				src: [ 'assets/sounds/ufo.mp3' ]
			}).play();
			break;
		case 'x':
			newCircle.fillColor = '#963852';
			new Howl({
				src: [ 'assets/sounds/vell.mp3' ]
			}).play();
			break;
		case 'y':
			newCircle.fillColor = '#a3fb82';
			new Howl({
				src: [ 'assets/sounds/wipe.mp3' ]
			}).play();
			break;
		case 'z':
			newCircle.fillColor = '#00aaff';
			new Howl({
				src: [ 'assets/sounds/zig-zag.mp3' ]
			}).play();
			break;
		default:
			newCircle.fillColor = '#d89af2';
			new Howl({
				src: [ 'assets/sounds/bubbles.mp3' ]
			}).play();
	}
}

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(0.9);
	}
}
