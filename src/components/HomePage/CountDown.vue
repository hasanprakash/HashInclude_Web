<template>
  <h2>Count Down</h2>
  <div class="video">
    <video
      width="400"
      controls
      autoplay
      loop
      playsinline
      style="pointer-events: none"
    >
      <source src="../../assets/Videos/hash_countdown.mp4" type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 10px 20px;
  text-transform: uppercase;
}
.video {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
