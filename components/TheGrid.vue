<template>
  <ul class="the_grid" v-editable="blok">
    <li class="grid_item" v-for="blok in blok.columns" :key="blok._uid">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.the_grid {
  display: flex;
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
