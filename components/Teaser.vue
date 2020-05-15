<template>
  <h1 v-editable="blok" class="col-2">{{ blok.headline }}</h1>
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
