import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import 'firebase/firestore';

// firebase database config file
const firebaseConfig = {
	apiKey: 'AIzaSyCcsdgBkM7pExfQBoCE8Ip9Y6GRfejCng8',
	authDomain: 'vue-blog-project-34a99.firebaseapp.com',
	projectId: 'vue-blog-project-34a99',
	storageBucket: 'vue-blog-project-34a99.appspot.com',
	messagingSenderId: '684747029638',
	appId: '1:684747029638:web:b2127b7094d4bd7bd1e507',
};

// init firebase
const firebase = initializeApp(firebaseConfig);

// database setup
const db = getFirestore(firebase);

// let timestamp = firebase.firestore;

export { db };
