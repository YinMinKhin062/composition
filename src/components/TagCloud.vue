<template>
	<h3>Tag cloud</h3>
	<div v-for="tag in uniqueTags" :key="tag" class="tag">
		<router-link :to="{ name: 'Tag', params: { tag: tag } }">{{ tag }}</router-link>
	</div>

	<!-- {{ uniqueTags }} -->
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
	props: ['posts'],
	setup(props) {
		let tags = ref([]);
		// console.log(props.posts);
		props.posts.forEach(post => {
			post.tags.forEach(tag => {
				tags.value.push(tag);
			});
		});
		console.log(tags.value);
		let uniqueTags = tags.value.filter((tag, index, array) => {
			return array.indexOf(tag) == index;
		});
		console.log(uniqueTags);
		return { uniqueTags };
	},
};
</script>

<style></style>
