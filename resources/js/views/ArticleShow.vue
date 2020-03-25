<template>
  <div class="text-center">
    <div class="font-sans container">
      <div class="text-right" v-if="can()">
        <button @click="destroy" class="bg-red-400 py-2 px-2 rounded">Eliminar</button>
        <button @click="edit" class="bg-blue-400 py-2 px-2 rounded">Edit</button>
      </div>
      <h1
        class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
      >{{ attributes.title }}</h1>
      <p class="text-sm md:text-base font-normal text-gray-600">{{ attributes.created_at }}</p>
      <p class="py-6">{{ attributes.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      attributes: {}
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios
        .get(`/api/articles/${this.$route.params.slug}`)
        .then(response => {
          this.article = response.data;
          this.attributes = response.data.attributes;
          console.log("attributes", attributes);
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    edit() {
        let slug = this.article.slug;
        this.$router.push({name:'edit', params: {slug}})
    },
    destroy() {
      axios
        .delete(`/api/articles/${this.article.slug}`)
        .then(response => {
            this.$router.push({path: '/my-articles'})
            console.log('response', response)
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    can() {
      return this.article.user_id == window.id;
    }
  }
};
</script>

<style>
</style>
