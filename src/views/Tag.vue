<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="posts.length" class="layout">
		<div>
			<PostList :posts="FilteredPostByTag"></PostList>
		</div>
		<div>
			<TagCloud :posts="posts"></TagCloud>
		</div>
	</div>
	<div v-else>Loading....</div>
</template>

<script>
import TagCloud from '../components/TagCloud';
import PostList from '../components/PostList';
import { computed } from '@vue/runtime-core';
import getPost from '../Composable/getPost';

export default {
	components: {
		TagCloud,
		PostList,
	},
	props: ['tag'],
	setup(props) {
		let { posts, error, load } = getPost();
		load();
		// console.log(props.tag);
		let FilteredPostByTag = computed(() => {
			return posts.value.filter(post => {
				return post.tags.includes(props.tag);
			});
		});
		return { posts, error, FilteredPostByTag };
	},
};
</script>

<style></style>
