<template>
  <event-top :data="data"></event-top>
  <card-holder></card-holder>
</template>

<script>
import EventTop from './EventTop.vue';
import CardHolder from './CardHolder.vue';
export default {
    components: {
      EventTop,
      CardHolder
    },
    props:['data'],
}
</script>

<style scoped>
.center {
    text-align: center;
}
</style>