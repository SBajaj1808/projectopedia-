const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const Firebase = getFirebase();
		const Firestore = getFirestore();
		Firebase.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((resp) => {
				console.log(resp);
				return Firestore.collection('users')
					.doc(resp.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0],
					});
			})
			.then(() => {
				dispatch({ type: 'SIGN_UP_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGN_UP_ERROR', err });
			});
	};
};
export default signUp;
