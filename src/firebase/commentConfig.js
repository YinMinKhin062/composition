import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCcsdgBkM7pExfQBoCE8Ip9Y6GRfejCng8',
	authDomain: 'vue-blog-project-34a99.firebaseapp.com',
	projectId: 'vue-blog-project-34a99',
	storageBucket: 'vue-blog-project-34a99.appspot.com',
	messagingSenderId: '684747029638',
	appId: '1:684747029638:web:0c90c7b4813444ced1e507',
};

//initialize app
const app = initializeApp(firebaseConfig);

//db
const db = getFirestore(firebase);

//auth

const auth = getAuth(app);
export { db, auth };
