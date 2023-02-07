<template>
	<div class="singlepost">
		<h3>{{ post.title }}</h3>
		<!-- <p>{{ post.body }}</p> -->
		<router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
			<p>{{ cutPostBody }}....</p>
		</router-link>

		<div v-for="tag in post.tags" :key="tag" class="tag">
			<router-link :to="{ name: 'Tag', params: { tag: tag } }">{{ tag }}</router-link>
		</div>
	</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
	props: ['post'],
	setup(props) {
		let cutPostBody = computed(() => {
			return props.post.body.substring(0, 19);
		});
		// console.log(cutPostBody.value);
		return { cutPostBody };
	},
};
</script>

<style>
.singlepost {
	/* text-align: center; */
	margin: auto 1.5rem;
	border-bottom: 1px solid #eee;
	padding: 1rem;
}

div h3 {
	font-weight: 300;
}
div a {
	text-decoration: none;
}
.tag {
	display: inline-block;
	border-radius: 10px;
	background: #eee;
	/* color: white; */
	padding: 0 7px 0 7px;
	margin: 5px;
}
</style>
