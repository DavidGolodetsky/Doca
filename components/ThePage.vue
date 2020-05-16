<template>
  <div>
    <component v-for="(blok,i) in blok.body" :key="i" :blok="blok" :is="blok.component" />
  </div>
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
