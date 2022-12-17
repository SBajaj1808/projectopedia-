const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const Firebase = getFirebase();
		Firebase.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: 'LOGIN_WITH_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'LOGIN_WITH_ERROR', err });
			});
	};
};

export default signIn;
