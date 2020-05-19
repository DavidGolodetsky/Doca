<template>
  <div>
    <component v-if="home" :key="home._uid" :blok="home" :is="home.component" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("home", ["home"])
  }
};
</script>

