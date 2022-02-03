flags = [];
for (let i = 0; i < 42; i++) flags[i] = 0;
var objs = document.querySelectorAll(".block");
var windowHeight = window.innerHeight;
$(window).scroll(function () {
  for (let i=0;i<objs.length;i++) {
    if (flags[i] == 0 && objs[i].offsetTop < $(this).scrollTop() + windowHeight) {
      objs[i].classList.toggle("active");
      flags[i] = 1;
    }
    else if(flags[i] == 1 && objs[i].offsetTop >= $(this).scrollTop() + windowHeight) {
      objs[i].classList.toggle("active");
      flags[i] = 0;
    }
  }
});

$(window).resize(function () {
  windowHeight = window.innerHeight;
});

window.scrollBy(0, 1);
