<template>
  <div class="the_header">
    <v-navigation-drawer permanent app>
      <the-sidebar />
    </v-navigation-drawer>
    <v-app-bar app>
      <div class="wrapper">
        <nuxt-link class="project_name" to="/articles">
          <project-name :blok="project" class="col-2" />
        </nuxt-link>
        <v-text-field
          dense
          hide-details
          class="col-4 ml-auto"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          solo
        />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("home", ["project"])
  }
};
</script>

<style scoped lang="scss">
.the_header {
  .wrapper {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
