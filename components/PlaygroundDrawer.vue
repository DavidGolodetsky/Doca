<template>
  <div></div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      toggleDrawer: null
    };
  },
  created() {
    this.toggleDrawer = this.drawer;
  }
};
</script>


