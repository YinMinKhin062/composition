import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PropsWithRef from '../views/PropsWithRef.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePost from '../views/CreatePost.vue';
import Tag from '../views/Tag.vue';
import Realtime from '../views/Realtime.vue';
import Welcome from '../views/Welcome.vue';
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/PropsWithRef',
		name: 'PropsWithRef',
		component: PropsWithRef,
	},
	{
		path: '/PropsWithRef/:id',
		name: 'PostDetail',
		component: PostDetail,
		props: true,
	},
	{
		path: '/CreatePost',
		name: 'CreatePost',
		component: CreatePost,
	},
	{
		path: '/Tag/:tag',
		name: 'Tag',
		component: Tag,
		props: true,
	},
	{
		path: '/Realtime',
		name: 'Realtime',
		component: Realtime,
	},
	{
		path: '/Welcome',
		name: 'Welcome',
		component: Welcome,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
