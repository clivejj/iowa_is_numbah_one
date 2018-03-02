console.log("test");

var svg = document.getElementById("box");
var stopButton = document.getElementById("stop");
var growButton = document.getElementById("grow");
var bounceButton = document.getElementById("bounce");

var id = 0;


function draw(e) {
    console.log("drawing circle");
    stop(e);
    svg.innerHTML = "";
    var r = 1;
    var augmenter = 1;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy", 250);
    circle.setAttribute("fill", "black");
    function drawCircle() {
	svg.innerHTML = "";
	circle.setAttribute("r", r.toString());
	svg.appendChild(circle);
	if (r == 1)
	    augmenter = 1;
	if (r == 250)
	    augmenter = -1;
	r += augmenter;
    }
    id = setInterval(drawCircle, 20);
}

growButton.addEventListener('click', draw);

function stop(e) {
    console.log("stop");
    if (id != 0)
	clearInterval(id);
}

stopButton.addEventListener('click', stop);


function bounce(e) {
    stop(e);
    svg.innerHTML = "";
    var dx = 1;
    var dy = 2;
    var x = 250;
    var y = 250;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "black");
    circle.setAttribute("r", "20")
    function move() {
	svg.innterHTML = "";
	circle.setAttribute("cx", x.toString());
	circle.setAttribute("cy", y.toString());
	svg.appendChild(circle);
	if (x == 0 + 20 || x == 500 -20) {
	    dx *= -1;
	}
	if (y == 0 + 20|| y == 500 - 20) {
	    dy *= -1;
	}
	x += dx;
	y += dy;
    }
    id = setInterval(move, 20);
}

bounceButton.addEventListener('click', bounce);

