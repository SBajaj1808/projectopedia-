import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA3ZOxE9pWrPjIeO6wD-5RxnyGL5U5a344',
	authDomain: 'notification-project-af221.firebaseapp.com',
	databaseURL: 'https://notification-project-af221-default-rtdb.firebaseio.com',
	projectId: 'notification-project-af221',
	storageBucket: 'notification-project-af221.appspot.com',
	messagingSenderId: '277444523867',
	appId: '1:277444523867:web:cb94854852335de9394c7e',
	measurementId: 'G-ZVDRTDCKCZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
