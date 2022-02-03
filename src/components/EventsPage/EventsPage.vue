<template>
  <event-container :data="eventDetails.filter(event => event.eventId === eventType)[0]"></event-container>
</template>

<script>
import EventContainer from './EventContainer.vue';
export default {
  components: { EventContainer },
  props: ['eventType'],
  watch: {
  },
  data() {
    return {
      eventDetails: [
        {
          eventId: 'technical',
          name: 'Techinical',
          description: `Being the one-stop solution for technical events, #include aims to bridge the gap between the latest
                technological research advancements and real-world applications across various industries. The theme of
                Entrepreneurium is put to the best use with a mission to bring together startups and leaders with a
                chance to connect, learn and help each other to be more successful.`,
          guideLines: 'Event Guidelines',
          teamSize: 'Team Size',
          imageUrls: []
        },
        {
          eventId: 'nontechnical',
          name: 'Non-Techinical',
          description: `Being the one-stop solution for technical events, #include aims to bridge the gap between the latest
                technological research advancements and real-world applications across various industries. The theme of
                Entrepreneurium is put to the best use with a mission to bring together startups and leaders with a
                chance to connect, learn and help each other to be more successful.`,
          guideLines: 'Event Guidelines',
          teamSize: 'Team Size',
          imageUrls: []
        },
        {
          eventId: 'workshop',
          name: 'Workshops',
          description: `Being the one-stop solution for technical events, #include aims to bridge the gap between the latest
                technological research advancements and real-world applications across various industries. The theme of
                Entrepreneurium is put to the best use with a mission to bring together startups and leaders with a
                chance to connect, learn and help each other to be more successful.`,
          guideLines: 'Workshop Guidelines',
          teamSize: 'Team Size',
          imageUrls: []
        },
        {
          eventId: 'hackathon',
          name: 'Hackathon',
          description: `Being the one-stop solution for technical events, #include aims to bridge the gap between the latest
                technological research advancements and real-world applications across various industries. The theme of
                Entrepreneurium is put to the best use with a mission to bring together startups and leaders with a
                chance to connect, learn and help each other to be more successful.`,
          guideLines: 'Event Guidelines',
          teamSize: 'Team Size',
          imageUrls: []
        }
      ]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>

</style>