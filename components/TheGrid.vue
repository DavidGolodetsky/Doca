<template>
  <ul class="the_grid" v-editable="blok">
    <li class="grid_item" v-for="blok in blok.columns" :key="blok._uid">
      <the-feature :blok="blok" />
    </li>
  </ul>
</template>

<script>
import TheFeature from "~/components/TheFeature";

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  components: {
    TheFeature
  }
};
</script>

<style lang="scss" scoped>
.the_grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  .grid_item {
    margin: 20px;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 20px;
  }
}
</style>
