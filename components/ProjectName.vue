<template>
  <div>
    <h1 v-editable="blok">{{ blok.name }}</h1>
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