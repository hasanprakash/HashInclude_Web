<template>
  <team-header fontsize="45px" titleHeight="220px">OUR TEAM</team-header>
  <wing-block v-for="(wing, wingId) of teamData" :key="wingId" :wingId="wingId"></wing-block>
</template>

<script>
import TeamHeader from "./TeamHeader.vue";
import WingBlock from "./WingBlock.vue";
export default {
  components: {
    TeamHeader,
    WingBlock,
  },
  inject: ['teamData'],
};
</script>

<style></style>
