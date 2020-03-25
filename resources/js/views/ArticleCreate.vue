<template>
  <div>
      <h2>Create Article</h2>
      <ArticleForm action="create" :article="article"/>
  </div>
</template>

<script>
import ArticleForm from "../components/ArticleForm";
export default {
    data(){
        return{
            article:{
                'attributes': {
                    'title': '',
                    'content': ''
                }
            }
        }
    },
  components: {
      ArticleForm
  }

};
</script>

<style>
</style>
