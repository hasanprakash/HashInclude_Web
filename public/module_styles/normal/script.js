const slideImage = document.querySelectorAll(".slideimage");
const slidesContainer = document.querySelector(".wrapperimages");
const backImage = document.querySelectorAll(".backgroundslideimage");
const backContainer = document.querySelector(".wrapperbackgroundimages");
var dots = document.getElementsByClassName("dot");
let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let backWidth = backImage[0].clientWidth;  
let currentSlide = 0;
goToSlide(currentSlide);
function rightbtn() {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }
  
    currentSlide++;
    goToSlide(currentSlide);
  };
  
  function leftbtn() {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }
  
    currentSlide--;
    goToSlide(currentSlide);
  };
  
  function goToSlide(slideNumber) {
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideNumber].className += " active";


    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";
      backContainer.style.transform =
      "translateX(-" + backWidth * slideNumber + "px)";
  
    currentSlide = slideNumber;
  }
  
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>
{
    var repeater = ()=>{
        setTimeout(function(){
            rightbtn(); 
            repeater(); 
        },3000);   
    }
    repeater();

    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; 
        let newIndex = i; 
        let clickedImgIndex; 
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; 
            function preview(){
                currentImg.textContent = newIndex + 1; 
                let imageURL = gallery[newIndex].querySelector("img").src; 
                previewImg.src = imageURL; 
            }
            preview(); 
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ 
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ 
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; 
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; 
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; 
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}