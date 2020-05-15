<template>
  <div>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      story: { content: {} }
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: "draft"
      })
      .then(res => res.data)
      .catch(res => {
        if (!res.response) {
          console.log(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content from api"
          });
        } else {
          console.log(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.message
          });
        }
      });
  },
  mounted() {
    this.$storybridge.on(["published", "change"], e => {
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true
      });
    });
  }
};
</script>

