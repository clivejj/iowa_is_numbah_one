console.log("test");

var svg = document.getElementById("box");
var stopButton = document.getElementById("stop");
var growButton = document.getElementById("grow");
var bounceButton = document.getElementById("bounce");

var id = 0;


function draw(e) {
    console.log("drawing circle");
    if (id != 0) {
	clearInterval(id);
    }
    var r = 1;
    var augmenter = 1;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy", 250);
    circle.setAttribute("fill", "black");
    function circle() {
	svg.innerHTML = "";
	circle.setAttribute("r", r.toString());
	box.appendChild(circle);
	if (r == 1)
	    augmenter = 1;
	if (r == 250)
	    augmenter = -1;
	r += augmenter;
    }
    id = setInterval(circle, 100);
}

growButton.addEventListener('click', draw);

/*stopButton.addEventListener('click', stop);

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


    */

