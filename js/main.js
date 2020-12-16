var slider = document.getElementsByClassName("inner")[0];
var img = document.querySelectorAll("img");
var i = 0;
console.log(img.length);
setInterval(function () {
    i += 1;
    if (i === img.length-3) {
        i = 0;
    }

    var x = i * -1350;

    slider.style.transform = "translate3d(" + x + "px,0,0)";


}, 2000);

