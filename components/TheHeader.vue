<template>
  <div class="the_header">
    <v-app-bar app>
      <v-btn text fab @click="drawer = !drawer">
        <v-icon dark>mdi-menu-open</v-icon>
      </v-btn>
      <nuxt-link class="project_name" to="/">
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
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <the-sidebar />
    </v-navigation-drawer>
  </div>
</template>

<script>
import TheSidebar from "~/components/TheSidebar";
import ProjectName from "~/components/ProjectName";
import { mapGetters } from "vuex";

export default {
  components: {
    TheSidebar,
    ProjectName
  },
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    ...mapGetters("home", ["project"])
  }
};
</script>

<style scoped lang="scss">
.the_header {
  .project_name {
    color: #fff !important;
  }
}
</style>