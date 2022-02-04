<template>
  <div :class="{'team-title': true}" :style="{ height: titleHeight }">
    <h1 :style="{ fontSize: fontsize }"><slot></slot></h1>
  </div>
</template>

<script>
export default {
    props: ['fontsize', 'titleHeight']
};
</script>

<style scoped>
.team-title {
    margin: auto;
    display: flex;
    width: 100vw;
    /* height: 220px; */
    align-items: center;
    justify-content: center;
    
}

.team-title h1 {
    font-weight: 600;
    color: #fff;
}
</style>
