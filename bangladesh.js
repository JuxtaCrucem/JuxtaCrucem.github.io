var cvs = document.getElementById("cv");
var ctx = cvs.getContext("2d");
var scoring = Math.floor( Math.random() * 101 ) + 50;
var postioning = scoring * 1.6;
var resultscore;

function rewrite (x) {
ctx.beginPath();
ctx.fillStyle = "#006651";
ctx.rect(0, 0, 360, 240);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#E90649";
ctx.arc(x, 96, 64, 0, 2 * Math.PI, false);
ctx.fill();
}

var resulttext;
var resultstr;
score.style.display = "none";
restart.style.display = "none";
//gotwitter.style.display = "none";
rewrite (postioning);

function goleft() { 
if (scoring > 50) {scoring = scoring - 1 ;}
postioning = scoring * 1.6;
rewrite (postioning);
}
function goright() {
if (scoring < 150) {scoring = scoring + 1 ;}
postioning = scoring * 1.6;
rewrite (postioning);
}

function result() {
left.style.display = "none";
right.style.display = "none";
done.style.display = "none";
restart.style.display = "block";
score.style.display = "block";
gotwitter.style.display = "block";

if (scoring > 90){ 
resultscore = scoring / 2;
resultscore = resultscore - 45;
resultstr = String(resultscore);
resulttext = "残念。旗の幅の" + resultstr + "%だけ右すぎます。";
}
if (scoring < 90){ 
resultscore = scoring / 2;
resultscore = 45 - resultscore;
resultstr = String(resultscore);
resulttext = "残念。旗の幅の" + resultstr + "%だけ左すぎます。";
}
if (scoring == 90) {
resulttext = "おめでとう！これはバングラデシュの国旗です！";
}
document.getElementById("score").innerHTML = resulttext;

var anchor = document.createElement("a");
var hrefValue = "https://twitter.com/intent/tweet?button_hashtag="
+ encodeURIComponent("バングラデシュの国旗ゲーム")
+ "&ref_src=twsrc%5Etfw";
anchor.setAttribute("href", hrefValue);
anchor.className = "twitter-hashtag-button";
resulttweet = "あなたの結果は…" + resulttext;
anchor.setAttribute("data-text", resulttweet);
anchor.setAttribute("data-url", "https://juxtacrucem.github.io/bangladesh.html");
anchor.innerText = "Tweet #バングラデシュの国旗ゲーム！";
gotwitter.appendChild(anchor);

var script = document.createElement("script");
script.setAttribute("src", "https://platform.twitter.com/widgets.js");
gotwitter.appendChild(script);
}

function retry() {
left.style.display = "block";
right.style.display = "block";
done.style.display = "block";
score.style.display = "none";
restart.style.display = "none";
gotwitter.style.display = "none";
while (gotwitter.firstChild) {
gotwitter.removeChild(gotwitter.firstChild);
}
scoring = Math.floor( Math.random() * 101 ) + 50;
postioning = scoring * 1.6;
rewrite (postioning);
}