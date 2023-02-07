import { db } from '../firebase/config';
import { ref } from 'vue';
// import {
// 	collection,
// 	getDocs,
// 	orderBy,
// 	query,
// 	QuerySnapshot,
// 	onSnapshot,
// } from 'firebase/firestore/lite';

import { collection, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { async } from '@firebase/util';

let getPost = () => {
	let posts = ref([]);
	let error = ref('');

	let load = async () => {
		try {
			// start of fetch
			// await new Promise((resolve, reject) => {
			// 	// resolve();
			// 	setTimeout(resolve, 1000);
			// });
			// let response = await fetch('http://localhost:3000/posts');
			// // console.log(response);
			// if (response.status == 404) {
			// 	throw new Error('Not Found Url');
			// }
			// let data = await response.json();
			// posts.value = data;
			// console.log(posts.value);
			// end of fetch
			// firebase collection fetch
			// let collRes = collection(db, 'posts');
			// let documents = await getDocs(collRes);
			// posts.value = documents.docs.map(doc => {
			// 	console.log(doc.id, doc.data());
			// 	return { id: doc.id, ...doc.data() };
			// });
			// end of firebase collection
			// console.log(documents);

			// firebase fetch with query
			const q = query(collection(db, 'posts'), orderBy('created_at', 'desc'));
			onSnapshot(q, querySnapshot => {
				console.log(querySnapshot);
				posts.value = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };

					// console.log(JSON.stringify(doc.data()));
					// console.log(doc.id);
				});
			});
			// end of firebase fetch with query
		} catch (e) {
			// console.log(e.message);
			error.value = e.message;
		}
	};

	return { posts, error, load };
};
export default getPost;
