<template>
  <div
    class="carousel slide"
    data-mdb-ride="carousel"
    id="carouselExampleControls"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          alt="Wild Landscape"
          class="d-block w-100"
          height="700px;"
          src="https://klhashinclude.in/static/images/aha.jpg"
        />
        <!-- aha -->
        <div class="light"></div>
        <div class="light"></div>
      </div>
      <div class="carousel-item">
        <img
          alt="Camera"
          class="d-block w-100"
          height="700px;"
          src="https://klhashinclude.in/static/images/bytexl_main.jpg"
        />
        <!-- bytexl -->
        <div class="light"></div>
        <div class="light"></div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          height="700px"
          src="https://klhashinclude.in/static/images/ticket.jpg"
        />
        <!-- ticket -->
        <div class="light"></div>
        <div class="light"></div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      data-mdb-slide="prev"
      data-mdb-target="#carouselExampleControls"
      type="button"
    >
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      data-mdb-slide="next"
      data-mdb-target="#carouselExampleControls"
      type="button"
    >
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="website">
    <div class="website-title">
      <h1>In Collaboration with</h1>
    </div>
    <div class="website-image">
      <img alt="" src="https://klhashinclude.in/static/images/aha.png" />
      <!-- aha -->
    </div>
  </div>
  <div class="website event-sponsors">
    <div class="website-title">
      <h1>Event Sponsors</h1>
    </div>
    <div class="website-image eve-img">
      <img alt="" src="https://klhashinclude.in/static/images/ss_group.png" />
      <!-- ssgroup -->
      <img
        alt=""
        src="https://klhashinclude.in/static/images/chandana.png"
        width="350"
        height="250"
      />
      <!-- chandana -->
      <img
        alt=""
        src="https://klhashinclude.in/static/images/Myfroyoland.png"
        width="500"
        height="250"
      />
      <!-- myfroyoland -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.light {
  animation: top-right 5s ease-in-out alternate infinite;
  border-bottom: none;
  border-left: solid 20vh transparent;
  border-right: solid 20vh transparent;
  border-top: solid 200vh rgba(255, 255, 255, 0.5);
  bottom: 0;
  height: 0;
  left: 0;
  position: absolute;
  transform-origin: bottom;
  width: 0;
}

.light + .light {
  animation: top-left 4s ease-in-out alternate infinite;
  left: auto;
  right: 0;
}

@keyframes top-right {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(70deg);
  }
}

@keyframes top-left {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-70deg);
  }
}

@media only screen and (max-width: 500px) {
  body {
    width: 100%;
    overflow-x: hidden;
  }
  .carousel {
    height: 40vh;
    width: 100vw;
  }

  .carousel-inner {
    height: 100%;
    width: 100%;
  }

  .carousel-item {
    height: 100%;
    width: 100%;
  }

  .carousel-item img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .website-image {
    width: 100%;
  }

  .website-image img {
    height: 200px;
    width: 350px;
    object-fit: contain;
  }

  .website-title h1 {
    font-size: 18px;
  }

  .eve-img {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .eve-img img {
    height: 200px;
    width: 350px;
    object-fit: contain;
  }
}

@media only screen and (max-width: 400px) {
  body {
    width: 100vw;
    overflow-x: hidden;
  }
  .website-image img {
    height: 150px;
    width: 250px;
    object-fit: contain;
  }
}

@media screen and (max-width: 480px) {
  div.light1 {
    display: none;
  }
}

.display-4 {
  font-size: medium;
}
.btn {
  text-transform: capitalize;
}
body {
  overflow-y: scroll;
  background: black;
  width: 100vw;
}
body::-webkit-scrollbar {
  display: none;
}

.website {
  margin-top: 30px;
}

.website-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.eve-img {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: black;
  padding: 20px;
  transform: scale(0.75);
}

.eve-img img {
  object-fit: contain;
}

.website-title h1 {
  text-align: center;
  color: white;
}
</style>
