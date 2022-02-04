<template>
  <div class="doc-cards">
    <team-card v-for="(team, index) of getDataObject" :key="index">
      <template #designation>
        {{ team.designation }} 
      </template>
      <template #name>
        {{ team.name }}
      </template>
    </team-card>
  </div>
</template>

<script>
import TeamCard from "../Cards/TeamCard.vue";
export default {
  components: { TeamCard },
  props: ["wingId"],
  inject: ['teamData'],
  computed: {
    getDataObject() {
      return Object.values(this.teamData[this.wingId])[1];
    },
  },
};
</script>

<style scoped>
.doc-cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  margin: auto;
  margin-bottom: 50px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-around;
}
</style>
