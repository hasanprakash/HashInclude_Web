<template>
  <event-top :data="data"></event-top>
  <card-holder :images="data.images"></card-holder>
</template>

<script>
import EventTop from "./EventTop.vue";
import CardHolder from "./CardHolder.vue";
export default {
  components: {
    EventTop,
    CardHolder,
  },
  props: ["data"],
};
</script>

<style scoped>
.center {
  text-align: center;
}

.wrapper {
  width: 100vw;
}

.wrapper .top {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  width: 90%;
  height: 50vh;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#30cfd0),
    to(#330867)
  );
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  margin: auto;
  margin-top: 85px;
  border-radius: 60px;
  /*border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;*/
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: 0px 23px 40px -35px #464646;
  box-shadow: 0px 23px 40px -35px #464646;
}

.wrapper .top .header-text-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  width: 40%;
  height: 60%;
}
</style>
