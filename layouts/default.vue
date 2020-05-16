<template>
  <v-app v-cloak id="app" class="app">
    <the-header />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}

ul {
  list-style: none;
}

.app a {
  color: #fff;
  text-decoration: none;
}
.app .nuxt-link-exact-active {
  color: $primary;
}
</style>


