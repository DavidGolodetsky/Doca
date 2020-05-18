<template>
  <div>
    <h2 v-editable="article.content" class="my-10">{{ article.content.title }}</h2>
    <hr class="mb-10" />
    <h3 v-editable="article.content" class="mb-10">{{ article.content.intro }}</h3>
    <div v-editable="article.content" v-html="richtext"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  asyncData({ store, params }) {
    return {
      articleSlug: params.articleSlug
    };
  },
  computed: {
    ...mapGetters("articles", { getArticle: "article" }),
    article() {
      return this.getArticle(this.articleSlug);
    },
    richtext() {
      return this.$storyapi.richTextResolver.render(this.article.content.body);
    }
  }
};
</script>

