<template>
  <div>
    <h2 v-editable="blok" class="col-2 mx-auto my-10">{{ blok.headline }}</h2>
    <hr class="mb-10" />
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

