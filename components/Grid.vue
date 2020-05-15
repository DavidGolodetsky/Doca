<template>
  <ul v-editable="blok">
    <li v-for="blok in blok.columns" :key="blok._uid">
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

