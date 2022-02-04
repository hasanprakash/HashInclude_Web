<template>
  <section class="techno" style="background-color: black">
    <div v-if="logoLeft" class="tech-cont">
      <div class="tech-img-cont">
        <img
          alt=""
          height="500px"
          :src="imageSrc"
          style="transform: scale(0.75)"
          width="500px"
        />
      </div>
      <div class="tech-text">
        <h1 style="color: white">K L University</h1>
        <p></p>
        <p class="right" style="color: white">
          &nbsp;&nbsp;&nbsp;The K L College of engineering has attained
          autonomous status in the year 2006 and in February 2009, the Koneru
          Lakshmaiah Education Foundation Society was recognised as Deemed to be
          University. In short Koneru Lakshmaiah Education Foundation is named
          as K L (Deemed to be) University. K L (Deemed to be) University has
          been awarded the Highest-grade A++ by NAAC. It has been approved by
          the All India Council for Technical Education, New Delhi. K L (Deemed
          to be) University is best known for its unique blend of culture and
          education.
        </p>
      </div>
    </div>

    <div v-if="!logoLeft" class="tech-cont">
      <div class="tech-text">
        <h1 style="color: white">K L University</h1>
        <p></p>
        <p class="right" style="color: white">
          &nbsp;&nbsp;&nbsp;The K L College of engineering has attained
          autonomous status in the year 2006 and in February 2009, the Koneru
          Lakshmaiah Education Foundation Society was recognised as Deemed to be
          University. In short Koneru Lakshmaiah Education Foundation is named
          as K L (Deemed to be) University. K L (Deemed to be) University has
          been awarded the Highest-grade A++ by NAAC. It has been approved by
          the All India Council for Technical Education, New Delhi. K L (Deemed
          to be) University is best known for its unique blend of culture and
          education.
        </p>
      </div>
      <div class="tech-img-cont">
        <img
          alt=""
          height="500px"
          :src="imageSrc"
          style="transform: scale(0.75)"
          width="500px"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["logoLeft", "imageSrc"],
  mounted() {
    // var right = document.querySelector(".right");
    // if(right != null)
    // right.classList.toggle("right-transition");
    // var left = document.querySelector(".left");
    // if(left != null)
    // left.classList.toggle("left-transition");
  },
};
</script>

<style scoped>
.techno {
  color: #0000;
  background-color: #fff;
  height: 72vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-cont {
  display: flex;
  height: 90%;
  width: 80%;
  align-items: center;
  justify-content: space-between;
}

.tech-img-cont {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 50%;
}

.tech-img-cont img {
  height: 70%;
  width: 90%;
  object-fit: contain;
}

.tech-text {
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
}

.tech-text h1 {
  color: rgb(49, 49, 49);
  font-size: 43px;
  text-align: center;
}

.tech-text p {
  color: rgb(48, 48, 48);
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
}

.right {
  transform: translate(0px);
  opacity: 1;
  transition: transform 2s ease-out, opacity 2s;
}
.right.right-transition {
  transform: translate(0px);
  opacity: 1;
}

.left {
  transform: translate(0px);
  opacity: 1;
  transition: transform 2s ease-out, opacity 2s;
}
.left.left-transition {
  transform: translate(0px);
  opacity: 1;
}
</style>
