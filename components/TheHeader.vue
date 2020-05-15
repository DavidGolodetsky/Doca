<template>
  <div>
    <v-app-bar app>
      <v-btn text fab @click="drawer = !drawer">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
      <!-- <h1 class="col-2">LAPI</h1> -->
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
import Teaser from "~/components/Teaser";

export default {
  components: {
    TheSidebar,
    Teaser
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>

