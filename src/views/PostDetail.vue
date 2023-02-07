<template>
	<!-- <h1>This is post detail {{ id }}</h1> -->
	<div v-if="postDetail">
		<h3>{{ postDetail.title }}</h3>
		<p>
			{{ postDetail.body }}
			<!-- {{ postDetal.tags }} -->
			<br /><br />
			<button class="btn btn-danger" @click="deletePost">Delete</button>
		</p>
		<!-- <div v-for="tag in postDetail.tags" :key="tag" class="tag">
			{{ tag }}
		</div> -->
	</div>
	<div v-else><Spinner></Spinner></div>
</template>

<script>
import Spinner from '../components/Spinner';
import getPostDetail from '../Composable/getPostDetail';
import { useRoute } from 'vue-router';
import { db } from '../firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

export default {
	components: { Spinner },
	props: ['id'],
	setup(props) {
		let route = useRoute();
		let router = useRouter();
		// console.log(route);
		// console.log(route.params.id);

		// let { postDetail, err, loadPostDetail } = getPostDetail(props.id);
		console.log(route.params.id);
		let { postDetail, err, loadPostDetail } = getPostDetail(route.params.id);
		loadPostDetail();

		let deletePost = async () => {
			try {
				let id = props.id;
				let docRef = doc(db, 'posts', id);
				let res = await deleteDoc(docRef);
				console.log(res);
			} catch (e) {
				console.log(e.message);
			}
			// alert('delete');
			router.push('/PropsWithRef');
		};

		return { postDetail, err, deletePost };
	},
};
</script>

<style scoped>
div {
	margin: auto 1.5rem;
}
</style>
