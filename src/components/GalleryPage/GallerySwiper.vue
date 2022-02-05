<template>
  <div class="swiper mySwiper">
    <div class="swipe mySwipe">
      <div class="swiper-wrapper">
        <div class="front swiper-slide" id="front">
          <img src="https://klhashinclude.in/static/images/img2.jpg" />
        </div>
        <div class="front swiper-slide" id="front">
          <img src="https://klhashinclude.in/static/images/img1.jpg" />
        </div>
        <div class="front swiper-slide" id="front">
          <img src="https://klhashinclude.in/static/images/img3.jpeg" />
        </div>
        <div class="front swiper-slide" id="front">
          <img src="https://klhashinclude.in/static/images/img10.jpeg" />
        </div>
        <div class="front swiper-slide" id="front">
          <img src="https://klhashinclude.in/static/images/img18.jpg" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="swiper-wrapper">
      <div class="swiper-slide" id="back" style="background: black">
        <img
          src="https://klhashinclude.in/static/images/img2.jpg"
          style="opacity: 0.2"
        />
      </div>
      <div class="swiper-slide" id="back" style="background: black">
        <img
          src="https://klhashinclude.in/static/images/img1.jpg"
          style="opacity: 0.2"
        />
      </div>
      <div class="swiper-slide" id="back" style="background: black">
        <img
          src="https://klhashinclude.in/static/images/img3.jpeg"
          style="opacity: 0.2"
        />
      </div>
      <div class="swiper-slide" id="back" style="background: black">
        <img
          src="https://klhashinclude.in/static/images/img10.jpeg"
          style="opacity: 0.2"
        />
      </div>
      <div class="swiper-slide" id="back" style="background: black">
        <img
          src="https://klhashinclude.in/static/images/img18.jpg"
          style="opacity: 0.2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
  //   const gallery = document.querySelectorAll(".image"),
  //     previewBox = document.querySelector(".preview-box"),
  //     previewImg = previewBox.querySelector("img"),
  //     closeIcon = previewBox.querySelector(".icon"),
  //     currentImg = previewBox.querySelector(".current-img"),
  //     totalImg = previewBox.querySelector(".total-img"),
  //     shadow = document.querySelector(".shadow");

  //   window.onload = () => {
  //     var repeater = () => {
  //       setTimeout(function () {
  //         rightbtn();
  //         repeater();
  //       }, 3000);
  //     };
  //     repeater();

  //     for (let i = 0; i < gallery.length; i++) {
  //       totalImg.textContent = gallery.length;
  //       let newIndex = i;
  //       let clickedImgIndex;

  //       gallery[i].onclick = () => {
  //         clickedImgIndex = i;
  //         function preview() {
  //           currentImg.textContent = newIndex + 1;
  //           let imageURL = gallery[newIndex].querySelector("img").src;
  //           previewImg.src = imageURL;
  //         }
  //         preview();

  //         const prevBtn = document.querySelector(".prev");
  //         const nextBtn = document.querySelector(".next");
  //         if (newIndex == 0) {
  //           prevBtn.style.display = "none";
  //         }
  //         if (newIndex >= gallery.length - 1) {
  //           nextBtn.style.display = "none";
  //         }
  //         prevBtn.onclick = () => {
  //           newIndex--;
  //           if (newIndex == 0) {
  //             preview();
  //             prevBtn.style.display = "none";
  //           } else {
  //             preview();
  //             nextBtn.style.display = "block";
  //           }
  //         };
  //         nextBtn.onclick = () => {
  //           newIndex++;
  //           if (newIndex >= gallery.length - 1) {
  //             preview();
  //             nextBtn.style.display = "none";
  //           } else {
  //             preview();
  //             prevBtn.style.display = "block";
  //           }
  //         };
  //         document.querySelector("body").style.overflow = "hidden";
  //         previewBox.classList.add("show");
  //         shadow.style.display = "block";
  //         closeIcon.onclick = () => {
  //           newIndex = clickedImgIndex;
  //           prevBtn.style.display = "block";
  //           nextBtn.style.display = "block";
  //           previewBox.classList.remove("show");
  //           shadow.style.display = "none";
  //           document.querySelector("body").style.overflow = "scroll";
  //         };
  //       };
  //     }
  //   };
  //   var swiper = new Swiper(".mySwipe", {
  //     spaceBetween: 30,
  //     centeredSlides: true,
  //     autoplay: {
  //       delay: 5000,
  //       disableOnInteraction: false,
  //     },
  //     speed: 1000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  //   var swiper = new Swiper(".mySwiper", {
  //     spaceBetween: 30,
  //     centeredSlides: true,
  //     autoplay: {
  //       delay: 5000,
  //       disableOnInteraction: false,
  //     },
  //     speed: 1000,
  //     effect: "fade",
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  //   VanillaTilt.init(document.querySelectorAll("#front"), {
  //     max: 15,
  //     speed: 400,
  //     glare: true,
  //     "max-glare": 0.1,
  //   });
  },
  
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}
.swipe {
  width: 76%;
  height: 70vh;
  margin: 120px 12%;
  position: absolute;
  z-index: 100;
  overflow: hidden;
  /*border-radius: 0px 100px;*/
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

#back {
  opacity: 0.4;
}
.swiper-pagination-bullet {
  opacity: 1;
  border: white solid 1px;
  background-color: transparent;
}
.swiper-pagination-bullet-active {
  background-color: rgb(31, 101, 207);
  height: 15px;
  width: 15px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
