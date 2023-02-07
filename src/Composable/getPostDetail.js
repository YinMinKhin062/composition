// import { doc, getDoc } from 'firebase/firestore/lite';
import { doc, getDoc } from 'firebase/firestore';
import { ref } from 'vue';
import { db } from '../firebase/config';

let getPostDetail = id => {
	let postDetail = ref(null);
	let err = ref('');

	let loadPostDetail = async () => {
		try {
			// await new Promise((resolve, reject) => {
			// 	setTimeout(resolve, 1000);
			// });
			// start of json fetch
			// let res = await fetch('http://localhost:3000/posts/' + id);
			// if (res.status == 404) {
			// 	throw new Error('Not Found with this id');
			// }
			// let detail = await res.json();
			// postDetail.value = detail;
			// end of json fetch

			// start of firebase fetch
			console.log(id);
			// fetch document by id
			let docRef = doc(db, 'posts', id);

			let document = await getDoc(docRef);
			console.log(document);
			if (document.exists()) {
				postDetail.value = { id: doc.id, ...document.data() };
				console.log(document.data());
			} else {
				console.log('Document not exists');
			}
			// end of firebase fetch
		} catch (e) {
			err.value = e.message;
		}
	};
	return { postDetail, err, loadPostDetail };
};
export default getPostDetail;
