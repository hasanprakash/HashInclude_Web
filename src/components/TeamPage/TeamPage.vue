<template>
  <div class="background">
    <team-container></team-container>
  </div>
</template>

<script>
import TeamContainer from "./TeamContainer.vue";
export default {
  components: {
    TeamContainer,
  },
  provide() {
    return {
      teamData: this.teamData,
    };
  },
  data() {
    return {
      teamData: [
        {
          title: 'CHAIRMAN',
          chairman: [
            {
              designation: "CHAIRMAN",
              name: "HARI KIRAN VEGE",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'CONVENORS',
          convenors: [
            {
              designation: "CONVENORS",
              name: "PAVAN KUMAR",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
            {
              designation: "CONVENORS",
              name: "VIDYULATHA",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'PROESSOR & FACULTY INCHARGE',
          incharges: [
            {
              designation: "FACULTY INCHARGE",
              name: "J. SURYA KIRAN",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'CHIEF EXECUTIVE',
          chiefexecutive: [
            {
              designation: "",
              name: "",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'CHIEFS',
          chiefs: [
            {
              designation: "",
              name: "",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'SECRETARY & TREASURER',
          secretaryAndTreasurer: [
            {
              designation: "",
              name: "",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'ADVISORS',
          advisors: [
            {
              designation: "",
              name: "",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'CORE TEAM',
          cores: [
            {
              designation: "",
              name: "",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
        {
          title: 'WEBMASTERS',
          webmasters: [
            {
              designation: "",
              name: "",
              imageUrl: "",
              facebook: "",
              instagram: "",
              linkedin: "",
              twitter: "",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.background {
  color: #0000;
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
  background: linear-gradient(to left, #000, rgb(43, 43, 43), #000);
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
