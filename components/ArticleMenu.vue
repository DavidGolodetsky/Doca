<template>
  <div>
    <ul>
      <li v-for="(item, i) in blok" :key="i">
        <a :href="`#${item.id}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
