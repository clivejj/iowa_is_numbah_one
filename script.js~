var canvas = document.getElementById("cj");
var stopButton = document.getElementById("stop");
var growButton = document.getElementById("grow");
var bounceButton = document.getElementById("bounce");

var ctx = canvas.getContext("2d");

var requestID = 0;
var expanding = true;

growButton.addEventListener('click', draw);

function draw(e) {
    window.cancelAnimationFrame(requestID);
    var r = 1;
    var augmenter = 1;
    function circle() {
	clear();
	ctx.beginPath();
	ctx.arc(250, 250, r, 0, 2 * Math.PI);
	ctx.fill();
	if (r == 1)
	    augmenter = 1;
	if (r == 250)
	    augmenter = -1;
	r += augmenter;
	requestID = window.requestAnimationFrame(circle);
    }
    circle();
}

stopButton.addEventListener('click', stop);

function stop(e) {
    window.cancelAnimationFrame(requestID);
}

bounceButton.addEventListener('click', bounce);

function bounce(e) {
    window.cancelAnimationFrame(requestID);
    var dx = 1;
    var dy = 2;
    var x = 250;
    var y = 250;
    function move() {
	clear();
	ctx.beginPath();
	ctx.arc(x, y, 5, 0, 2 * Math.PI);
	ctx.fill();
	if (x == 0 || x == 500) {
	    dx *= -1;
	}
	if (y == 0 || y == 500) {
	    dy *= -1;
	}
	x += dx;
	y += dy;
	requestID = window.requestAnimationFrame(move);
    }
    move();

}
	
    
function clear() {
    ctx.clearRect(0, 0, 500, 500);
}


    




