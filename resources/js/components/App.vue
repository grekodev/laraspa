<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/articles">Article</router-link>
    <router-link to="/my-articles">My Articles</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["user"],
  created() {
    window.id = this.user.id;
    axios.interceptors.request.use(config => {
      if (config.method === "get") {
        if (config.url.match('/\?./')) {
            let url = config.url.split("?");
            console.log('url', url)
            let page = url[1];
            url = url[0];
            config.url = `${url}?api_token=${this.user.api_token}&${page}`;
            return config;
        }
        config.url = `${config.url}?api_token=${this.user.api_token}`;
      } else {
        config.data = {
          ...config.data,
          api_token: this.user.api_token
        };
      }
      return config;
    });
  }
};
</script>

<style scoped>
</style>
