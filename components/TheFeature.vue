<template>
  <div v-editable="blok">
    <div>{{ blok.name }}</div>
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
