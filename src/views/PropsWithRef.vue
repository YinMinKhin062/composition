<template>
	<!-- <h1>{{ posts }}</h1> -->
	<div class="posts">
		<div v-if="error">
			{{ error }}
		</div>
		<div v-else-if="posts.length > 0" class="layout">
			<div><PostList :posts="posts"></PostList></div>
			<div><TagCloud :posts="posts"></TagCloud></div>
		</div>
		<div v-else>
			<Spinner></Spinner>
		</div>
	</div>
</template>

<script>
import TagCloud from '../components/TagCloud';
import Spinner from '../components/Spinner';
import PostList from '../components/PostList';
import getPost from '../Composable/getPost';
export default {
	components: {
		TagCloud,
		Spinner,
		PostList,
	},
	setup() {
		// destructure and composable function
		let { posts, error, load } = getPost();

		// let showPost = ref(true);
		load();

		// Destructuring
		// let { name, age } = {
		//   name: "yin min khin",
		//   age: 21,
		// };
		// console.log(name);
		// console.log(age);

		return { posts, error };
	},
};
</script>

<style>
.posts {
	margin: 0 auto;
	padding: 10px;
}
.layout {
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 2rem;
}
</style>
