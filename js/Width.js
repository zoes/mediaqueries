
var width  = $(window).width();
var widthNoJQ = document.documentElement.clientWidth;
var winInW = window.innerWidth;
var winOutW = window.outerWidth;

var height  = $(window).height();
var heightNoJQ = document.documentElement.clientWidth;
var winInH = window.innerHeight;
var winOutH = window.outerHeight;


var devW = window.screen.width;
var devAW = window.screen.availWidth;

var devH = window.screen.height;
var devAH = window.screen.availHeight;


$(document).ready(function() {
document.getElementById("width").innerHTML="jQuery $(window).width " + width;
document.getElementById("widthnojq").innerHTML="document.documentElement.clientWidth " + widthNoJQ;
document.getElementById("wininw").innerHTML="window.innerWidth " + winInW;
document.getElementById("winoutw").innerHTML="window.outerWidth " + winOutW;

document.getElementById("height").innerHTML="jQuery $(window).height " + height;
document.getElementById("heightnojq").innerHTML="document.documentElement.clientHeight " + heightNoJQ;
document.getElementById("wininh").innerHTML="window.innerHeight " + winInH;
document.getElementById("winouth").innerHTML="window.outerHeight " + winOutH;

document.getElementById("devw").innerHTML="window.screen.width " + devW;
document.getElementById("devaw").innerHTML="window.screen.availWidth " + devAW;
document.getElementById("devh").innerHTML="window.screen.height " + devH;
document.getElementById("devah").innerHTML="window.screen.availHeight " + devAH;

});
 
 