<template>
  <div v-editable="blok">
    <p>{{ blok.name }}</p>
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
