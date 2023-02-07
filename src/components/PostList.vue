<template>
	<!-- {{ posts }} -->
	<div v-for="post in posts" :key="post.id">
		<SinglePost :post="post"></SinglePost>
		<!-- <p>Tilte - {{ post.title }} Body - {{ post.body }}</p> -->
	</div>
</template>

<script>
import SinglePost from './SinglePost';
export default {
	components: { SinglePost },
	props: ['posts'],
	setup() {},
};
</script>

<style></style>
