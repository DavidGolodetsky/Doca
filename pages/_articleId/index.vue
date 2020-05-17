<template>
  <div>
    <h2 class="my-10">{{ article.title }}</h2>
    <hr class="mb-10" />
    <h3 class="mb-10">{{ article.intro }}</h3>
    <div v-html="richtext"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  asyncData({ store, params }) {
    return {
      articleId: params.articleId
    };
  },
  computed: {
    ...mapGetters("articles", { getArticle: "article" }),
    article() {
      return this.getArticle(this.articleId);
    },
    richtext() {
      return this.$storyapi.richTextResolver.render(this.article.body);
    }
  }
};
</script>

