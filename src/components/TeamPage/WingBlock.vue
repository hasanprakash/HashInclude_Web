<template>
  <team-header fontsize="25px" titleHeight="40px">{{ teamData[wingId].title }}</team-header>
  <team-card-holder :wingId="wingId"></team-card-holder>
</template>

<script>
import TeamHeader from './TeamHeader.vue';
import TeamCardHolder from './TeamCardHolder.vue';
export default {
    components: {
        TeamHeader,
        TeamCardHolder
    },
    props: ['wingId'],
    inject: ['teamData'],
}
</script>

<style scoped>

</style>