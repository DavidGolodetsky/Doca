<template>
  <ul class="the_grid" v-editable="blok">
    <li class="grid_item" v-for="(blok, i) in blok.columns" :key="i" :class="`feature-${i}`">
      <the-feature :blok="blok" />
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
  display: grid;
  grid-gap: 50px;
  grid-template:
    "head head side" 150px
    "main main side" 100px
    "main main side" 150px
    / 1fr 2fr 1fr;

  .grid_item {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 20px;
  }
  .feature-0 {
    background-color: cadetblue;
    grid-area: head;
  }
  .feature-1 {
    background-color: teal;
    grid-area: main;
  }
  .feature-2 {
    background-color: teal;
    grid-area: side;
  }
}
</style>
