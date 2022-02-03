<template>
  <div class="cards">
    <event-card v-for="image of images" :key="image.imageName">
      <template #name>
        {{ image.imageName }}
      </template>
      <template #url>
        {{ image.imageUrl }}
      </template>
    </event-card>
  </div>
</template>

<script>
import EventCard from "../Cards/EventCard.vue";
export default {
  props: ["images"],
  components: {
    EventCard,
  },
};
</script>

<style scoped>
.cards {
  width: 85%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
</style>
