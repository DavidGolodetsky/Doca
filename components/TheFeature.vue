<template>
  <div v-editable="blok">
    <div>{{ blok.text }}</div>
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
