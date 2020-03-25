<template>
  <div>
    <ArticleForm action="update" :article="article" />
  </div>
</template>

<script>
import ArticleForm from "../components/ArticleForm";
export default {
  data() {
    return {
      article: {
        attributes: {
          title: "",
          content: ""
        }
      }
    };
  },
  created() {
    this.fetch();
  },
  components: {
    ArticleForm
  },
  methods: {
    fetch() {
      axios
        .get(`/api/articles/${this.$route.params.slug}`)
        .then(response => {
          this.article = response.data;
          console.log("object", this.article);
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  }
};
</script>

<style>
</style>
