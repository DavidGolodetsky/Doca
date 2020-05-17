<template>
  <v-list class="the_sidebar" dense>
    <v-list-group prepend-icon="mdi-home-city" :value="false">
      <template v-slot:activator>
        <v-list-item-title>Home</v-list-item-title>
      </template>
      <v-list-item class="nested_item" v-for="(article, i) in articles" :key="i">
        <nuxt-link class="item_link" :to="article.id">
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
  props: {
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      toggleDrawer: null
    };
  },
  computed: {
    ...mapGetters("articles", ["articles"])
  },
  created() {
    this.toggleDrawer = this.drawer;
  }
};
</script>

<style lang="scss" scoped>
.the_sidebar {
  .nested_item {
    border-bottom: 1px solid grey;
    &:hover .item_link {
      color: $primary;
    }
  }
  .item_link {
    width: 100%;
  }
}
</style>

