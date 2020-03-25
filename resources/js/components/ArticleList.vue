<template>
  <div>
    <div @click="show(article.slug)" v-for="article of articles" :key="article.id">
      <p>{{article.attributes.title}}</p>
      <img :src="article.attributes.picture" alt />
    </div>

    <ul class="flex justify-center">
      <li v-for="page in pagination.last_page" :key="page" class="py-2 px-2">
        <button @click="doPagination(page)">{{page}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      pagination: {}
    };
  },
  props: ['endpoint'],

  created() {
    console.log("created");
    this.fetchArticles();
  },
  methods: {
    fetchArticles(endPoint = this.endpoint) {
      axios
        .get(endPoint)
        .then(response => {
          console.log({ response });
          this.articles = response.data.data;
          this.makePagination({ ...response.data.meta, ...response.data.link });
        })
        .catch(err => {
          console.log(err);
        });
    },
    makePagination(data) {
      this.pagination = data;
    },

    doPagination(page) {
      this.fetchArticles(`${this.endpoint}?page=${page}`);
    },
    show(slug){
        this.$router.push({name:'show', params: {slug}})
    }
  }
};
</script>

<style>
</style>
