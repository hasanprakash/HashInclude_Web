<template>
  <header>
    <div class="overlay" style="height: 1050px; top: -100px">
      <iframe
        frameborder="0"
        height="100%"
        class="some_video"
        src="https://www.youtube.com/embed/5gf-Qn0o0cs?autoplay=1&amp;loop=1&amp;mute=1&amp;controls=0&amp;playlist=5gf-Qn0o0cs"
        style="pointer-events: none"
        width="200%"
      >
      </iframe>
    </div>
    <div class="d-flex h-100 text-center align-items-center">
      <div class="smallerscreen logo-title">
        <div class="w-100 text-white" id="header_center">
          <img
            height="600"
            :src="require(`../../assets/Main Logos/hashincludeWithTagLine.png`)"
            style="z-index: 100; opacity: 1"
          />
        </div>
      </div>
      <div class="largerscreen">
        <div class="w-100 text-white" id="header_center">
          <img height="200" src="#" width="350" style="margin-top: 125px" />
        </div>
      </div>
    </div>
    <div class="wavey">
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div
            class="wave waveTop"
            style="
              background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png');
            "
          ></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div
            class="wave waveMiddle"
            style="
              background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png');
            "
          ></div>
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="smallerscreen">
                <div class="w-100 text-white" id="header_center">
                  <img
                    height="600"
                    src="#"
                    style="margin-left: 100px; z-index: 20"
                    width="900"
                  />
                </div>
              </div>
              <div class="largerscreen">
                <div class="w-100 text-white" id="header_center">
                  <img height="200" src="#" width="350" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div
            class="wave waveBottom"
            style="
              background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png');
            "
          ></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 200;
  transform: scale(0.85);
}
header {
  position: relative;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  filter: brightness(500%) !important;
  filter: contrast(100%) !important;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  filter: brightness(500%) !important;
  filter: contrast(100%) !important;
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

.mbr-crt-title a {
  color: black !important;
}

@media only screen and(max-width:990px) {
  header img {
    height: 100% !important;
    width: 100% !important;
  }
  .wavey {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  div.smallerscreen {
    display: none;
  }
}
@media screen and (min-width: 480px) {
  div.largerscreen {
    display: none;
    overflow-x: hidden !important;
  }
}
@media screen and (min-width: 480px) {
  div.wavey {
    display: none;
  }
}

body {
  overflow-y: scroll;
}
body::-webkit-scrollbar {
  display: none;
}
header .overlay iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 1;
  z-index: -200;
}
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 900000000;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 120px;
  /* background-image: url("static/images"); */
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
</style>
