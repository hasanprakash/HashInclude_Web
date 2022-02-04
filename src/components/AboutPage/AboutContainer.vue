<template>
    <about-object :logoLeft="true" imageSrc="https://klhashinclude.in/static/images/kl%20logo_white.png"></about-object>
    <about-object :logoLeft="false" imageSrc="https://klhashinclude.in/static/images/hashinclude_white.png"></about-object>
    <about-object :logoLeft="true" imageSrc="https://klhashinclude.in/static/images/cselogo.png"></about-object>
    <about-object :logoLeft="false" imageSrc="https://klhashinclude.in/static/images/focus_white.png"></about-object>
</template>

<script>
import AboutObject from './AboutObject.vue';
export default {
  components: {
      AboutObject
  }
};
</script>

<style scoped>

</style>
