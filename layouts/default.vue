<template>
  <v-app v-cloak id="app" class="app">
    <the-header />
    <v-main>
      <v-container class="container">
        <main>
          <nuxt class="content" />
        </main>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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

<style lang="scss">
[v-cloak] {
  display: none;
}

.app {
  .container {
    max-width: 1600px;
    padding: 0 20px;
  }
  .content {
    min-height: 1000px;
  }
  .drawer {
    padding-top: 0;
    padding-bottom: 0;
  }

  ul {
    list-style: none;
  }

  .spaces {
    white-space: pre-line;
  }

  a {
    text-decoration: none;
  }
}
</style>


