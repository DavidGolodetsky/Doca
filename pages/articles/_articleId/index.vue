<template>
  <v-row class="article">
    <v-col cols="9">
      <lazy-article-block :blok="blok" v-for="(blok, i) in article.body" :key="i" />
    </v-col>
    <v-col cols="3">
      <article-menu :blok="article.body" />
    </v-col>
  </v-row>
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
    }
  }
};
</script>

<style scoped lang="scss">
.article {
  scroll-behavior: smooth;
}
</style>

