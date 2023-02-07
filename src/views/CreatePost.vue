<template>
	<div class="container">
		<form @submit.prevent="addPost">
			<div class="mb-3 mt-3">
				<label for="title" class="form-label">Title</label>
				<input type="text" class="form-control" name="title" id="name" v-model="title" required />
			</div>
			<div class="mb-3">
				<label for="body" class="form-label">Body</label>
				<textarea
					name="body"
					id="body"
					cols="30"
					rows="10"
					class="form-control"
					v-model="body"
					required
				></textarea>
			</div>
			<div class="mb-3">
				<label for="tag" class="form-label">Tag</label>
				<input
					type="text"
					class="form-control"
					name="tag"
					id="tag"
					v-model="tag"
					@keydown.enter.prevent="handleKeyDown"
				/>
			</div>
			<div class="mb-3">
				<div class="tag" v-for="tag in tags" :key="tag">
					<!-- <p> -->
					{{ tag }}
					<!-- </p> -->
				</div>
			</div>
			<button class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { db } from '../firebase/config';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default {
	setup() {
		let route = useRouter();

		let title = ref('');
		let body = ref('');
		let tag = ref('');
		let tags = ref([]);

		let handleKeyDown = () => {
			// check textbox includes empty value
			if (tag.value.trim().length !== 0) {
				// check array has value of textbox or not
				if (!tags.value.includes(tag.value.trim(' '))) {
					tags.value.push(tag.value.trim(' ')); // push to the array different values
				}
				tag.value = ''; // textbox value clear
			} else {
				tag.value = '';
			}
		};

		let addPost = async () => {
			let newPost = {
				title: title.value,
				body: body.value,
				tags: tags.value,
				created_at: serverTimestamp(),
			};

			//start of addpost with json
			// await fetch('http://localhost:3000/posts', {
			// 	method: 'POST',
			// 	headers: { 'content-type': 'application/json' },
			// 	body: JSON.stringify({
			// 		title: title.value,
			// 		body: body.value,
			// 		tags: tags.value,
			// 	}),
			// });
			// let data=await res.json();
			// end of addpost with json

			// start of addpost with firebase
			try {
				let dbRef = collection(db, 'posts');
				let res = await addDoc(dbRef, newPost);
				console.log(res);
				console.log(created_at);
			} catch (e) {
				console.log(e.message);
			}
			// end of addpost with firebase

			route.push('/PropsWithRef');
		};

		return { title, body, tag, tags, handleKeyDown, addPost };
	},
};
</script>

<style scoped>
.tag {
	display: inline-block;
	border-radius: 10px;
	background: #eee;
	/* color: white; */
	padding: 7px;
	margin-left: 7px;
}
/* button {
	border: none;
	background: lightgreen;
	color: white;
	padding: 10px 15px 10px 15px;
	border-radius: 5px;
	margin: auto;
} */
</style>
