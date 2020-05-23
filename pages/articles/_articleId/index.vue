<template>
  <v-row>
    <v-col cols="9">
      <article-block :blok="blok" v-for="(blok, i) in article.body" :key="i" />
    </v-col>
    <v-col cols="3">
      <article-menu :blok="article.body" />
    </v-col>
  </v-row>
</template>

<script>
import ArticleMenu from "~/components/ArticleMenu";
import ArticleBlock from "~/components/ArticleBlock";
import { mapGetters } from "vuex";

export default {
  components: {
    ArticleMenu,
    ArticleBlock
  },
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
    menuItems() {
      console.log(this.$storyapi.richTextResolver.render(this.article.body));
      return [];
    }
  }
};
</script>

<style scoped lang="scss">
</style>

