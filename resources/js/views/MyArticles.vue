<template>
    <div>
        <ArticleList endpoint="/api/my-articles"/>

    </div>
</template>

<script>
import ArticleList from "../components/ArticleList";

export default {
    data(){
         return {};
    },
    components: {
        ArticleList
    }
}
</script>

<style>

</style>
