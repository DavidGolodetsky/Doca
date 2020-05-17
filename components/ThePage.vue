<template>
  <div>
    <component v-for="(blok,i) in blok.body" :key="i" :blok="blok" :is="blok.component" />
  </div>
</template>

<script>
import TheGrid from "~/components/TheGrid";
import TheTeaser from "~/components/TheTeaser";
import ProjectName from "~/components/ProjectName";

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  components: {
    TheGrid,
    TheTeaser,
    ProjectName
  }
};
</script>
