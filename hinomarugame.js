(document, 'script', 'twitter-wjs');
var cvs = document.getElementById("cv");
var ctx = cvs.getContext("2d");
function rewrite (x) {
ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.rect(0, 0, 360, 240);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#C22047";
ctx.arc(150, 100, x * 0.6, 0, 2 * Math.PI, false);
ctx.fill();
}
var radius = Math.floor( Math.random() * 101 ) + 50;
var resulttext;
var resultstr;
score.style.display = "none";
restart.style.display = "none";
//gotwitter.style.display = "none";
rewrite (radius);

function smaller() { 
if (radius > 50) {radius = radius - 1 ;}
rewrite (radius);
}
function bigger() {
if (radius < 150) {radius = radius + 1 ;}
rewrite (radius);
}

function result() {
small.style.display = "none";
large.style.display = "none";
done.style.display = "none";
restart.style.display = "block";
score.style.display = "block";
gotwitter.style.display = "block";

resultstr = String(radius);
if (radius == 100) {
resulttext = "おめでとう！これは日本の国旗です！";
}
else if (radius < 110){
if (radius >90){
resulttext = "惜しい！日の丸の" + resultstr + "%の大きさです！";
}
resulttext = "残念。日の丸の" + resultstr + "%の大きさです。";
}
else {
resulttext = "残念。日の丸の" + resultstr + "%の大きさです。";
}
document.getElementById("score").innerHTML = resulttext;

var anchor = document.createElement("a");
var hrefValue = "https://twitter.com/intent/tweet?button_hashtag="
+ encodeURIComponent("日本の国旗ゲーム！")
+ "&ref_src=twsrc%5Etfw";
anchor.setAttribute("href", hrefValue);
anchor.className = "twitter-hashtag-button";
resulttweet = "あなたの結果は…" + resulttext;
anchor.setAttribute("data-text", resulttweet);
anchor.setAttribute("data-url", "https://juxtacrucem.github.io/hinomaru.html");
anchor.setAttribute("data-size", large);
anchor.innerText = "Tweet #電源ボタンを押せ";
gotwitter.appendChild(anchor);

var script = document.createElement("script");
script.setAttribute("src", "https://platform.twitter.com/widgets.js");
gotwitter.appendChild(script);
}

function retry() {
small.style.display = "block";
large.style.display = "block";
done.style.display = "block";
score.style.display = "none";
restart.style.display = "none";
gotwitter.style.display = "none";
while (gotwitter.firstChild) {
gotwitter.removeChild(gotwitter.firstChild);
}
radius = Math.floor( Math.random() * 101 ) + 50;
rewrite (radius);
}
