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
  },
  // TODO:move to default?
  mounted() {
    this.$storybridge.on(["published", "change"], e => {
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true
      });
    });
  }
};
</script>

