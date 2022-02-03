<template>
  <base-header></base-header>
  <router-view></router-view>
  <base-footer></base-footer>
</template>

<script>
import BaseFooter from './components/UI/BaseFooter.vue';
import BaseHeader from './components/UI/BaseHeader.vue';

export default {
  components: { BaseHeader, BaseFooter },
}
</script>
<style>

</style>
