<template>
  <v-list class="the_sidebar" dense>
    <v-list-group prepend-icon="mdi-home-city" :value="false">
      <template v-slot:activator>
        <v-list-item-title>Home</v-list-item-title>
      </template>
      <v-list-item class="nested_item" v-for="item in items" :key="item.title">
        <nuxt-link class="item_link" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </nuxt-link>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      toggleDrawer: null,
      items: [
        { title: "Home", link: "home" },
        { title: "My Account", link: "account" },
        { title: "Users", link: "users" }
      ]
    };
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

