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
          name: 'Technical',
          description: `Being the one-stop solution for technical events, #include aims to bridge the gap between the latest
                technological research advancements and real-world applications across various industries. The theme of
                Entrepreneurium is put to the best use with a mission to bring together startups and leaders with a
                chance to connect, learn and help each other to be more successful.`,
          guideLines: 'Event Guidelines',
          teamSize: 'Team Size',
          images: [
            {
              imageName: 'A Mole Of The 1 Hash',
              imageUrl: '',
            },
            {
              imageName: 'A Mole Of The 2 Hash',
              imageUrl: '',
            }
          ]
        },
        {
          eventId: 'nontechnical',
          name: 'Non-Technical',
          description: `To keep up the enthusiastic spirit of #include’22 and to add a fun element to the mega gala,we bring forth 20+ exciting events adding to the list of competitions including our all-time favourites JAM, Debate, Squidgame, Mr. and Ms. #include, BGMI and Stand-up comedy.`,
          guideLines: 'Event Guidelines',
          teamSize: 'Team Size',
          imageUrls: []
        },
        {
          eventId: 'workshop',
          name: 'Workshops',
          description: `#include’ 22 has attempted to revolutionize creativity and innovation, by organizing a number of workshops on trending technologies. It's the comprehensive professional force that will kindle your creative flame. Be a part of this initiative to explore and learn from the best in the industry.`,
          guideLines: 'Workshop Guidelines',
          teamSize: 'Team Size',
          imageUrls: []
        },
        {
          eventId: 'hackathon',
          name: 'Hackathon',
          description: `Along with the enormous number of events that are going to be organized by team #include, hackathon take an extensive role in creating an opportunity for the students to bring a sense of surprise and openness to their interpretation of the fiesta.`,
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