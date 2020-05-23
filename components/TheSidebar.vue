<template>
  <v-list class="the_sidebar" dense>
    <v-list-group prepend-icon="mdi-home-city" :value="true">
      <template v-slot:activator>
        <v-list-item-title>Home</v-list-item-title>
      </template>
      <v-list-item class="nested_item" v-for="(article, i) in articles" :key="i">
        <nuxt-link class="item_link" :to="`/articles/${article.id}`">
          <v-list-item-content>
            <v-list-item-title>{{ article.title }}</v-list-item-title>
          </v-list-item-content>
        </nuxt-link>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("articles", ["articles"])
  }
};
</script>

<style lang="scss" scoped>
.the_sidebar {
  .nested_item {
    border-bottom: 1px solid grey;
  }
  .item_link {
    width: 100%;
  }
}
</style>

