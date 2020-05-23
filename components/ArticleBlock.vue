<template>
  <div class="article" v-editable="blok">
    <a :id="blok.id"></a>
    <h2 class="my-10">{{ blok.title }}</h2>
    <hr class="mb-10" />
    <div v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.blok.body);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>