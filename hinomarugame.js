var cvs = document.getElementById("cv");
var ctx = cvs.getContext("2d");
var radius = 100;

function smaller() { radius = radius - 1 ; }
function bigger() {radius = radius + 1 ; }

ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.rect(0, 0, 360, 240);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#C22047";
ctx.arc(180, 120, radius * 0.72, 0, 2 * Math.PI, false);
ctx.fill();