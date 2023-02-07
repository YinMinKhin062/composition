<template>
	<!-- <nav>
		<router-link :to="{ name: 'home' }">Computed with Ref</router-link>
		| <router-link :to="{ name: 'PropsWithRef' }">Props with Ref</router-link>|
		<router-link :to="{ name: 'CreatePost' }">Create Post</router-link> -->
	<Navbar></Navbar>
	<WelcomeUser></WelcomeUser>

	<router-view />
	<!-- </nav> -->
</template>
<script>
import WelcomeUser from './components/WelcomeUser';
import { onMounted } from 'vue';
import Navbar from './components/Navbar';
import { useStore } from 'vuex';
export default {
	components: {
		WelcomeUser,
		Navbar,
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			// console.log(this.$store.state.comment.hello);
			console.log(store.state.comment.hello);
			// console.log('hi');
			// 		console.log(store);
		});
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	/* color: #000000; */
}

/* nav {
	padding: 30px;
	text-align: center;
}

nav a {
	flex: inline-block;
	text-decoration: none;
	font-weight: bold;
	color: #2c3e50; */
/* text-align: center; */
/* }

nav a.router-link-exact-active {
	color: #42b983;
} */
</style>
