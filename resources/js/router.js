import Vue from 'vue';
import VueRouter from 'vue-router'
import HomeComponent from './views/HomeComponent'
import AboutComponent from './views/AboutComponent'
import ArticleIndex from './views/ArticleIndex'
import NotFound from './views/NotFound'
import MyArticle from './views/MyArticles'
import ArticleShow from './views/ArticleShow'
import ArticleCreate from './views/ArticleCreate'
import ArticleEdit from './views/ArticleEdit'

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{path: '/home', component: HomeComponent},
		{path: '/about', component: AboutComponent},
		{path: '/articles', component: ArticleIndex},
		{path: '/articles/create', component: ArticleCreate},
		{path: '/my-articles', component: MyArticle},
		{path: '/articles/:slug/edit', component: ArticleEdit, name: 'edit'},
		{path: '/articles/:slug', component: ArticleShow, name: 'show'},
		{path: '*', component: NotFound}
	]
});
