import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootreducer from './Store/Reducers/rootreducer';
import thunk from 'redux-thunk';
import {
	ReactReduxFirebaseProvider,
	getFirebase,
	isLoaded,
} from 'react-redux-firebase';
import {
	createFirestoreInstance,
	getFirestore,
	reduxFirestore,
} from 'redux-firestore';
import fbConfig from './config/Fbconfig';
import firebase from 'firebase/app';
const store = createStore(
	rootreducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase, fbConfig)
	)
);

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
	updateProfileOnLogin: false,
};
const rrfProps = {
	firebase,
	config: rrfConfig,
	fbConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <div>Loading Screen...</div>;
	return children;
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AuthIsLoaded>
					<App />
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
