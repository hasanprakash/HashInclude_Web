console.log("Hello Bro")
var right = document.querySelectorAll(".right");
for(let i=0;i<right.length;i++) {
    right[i].classList.toggle("right-transition");
}
var left = document.querySelectorAll(".left");
for(let i=0;i<left.length;i++) {
    left[i].classList.toggle("left-transition");
}