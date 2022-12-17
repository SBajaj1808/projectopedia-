const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const Firebase = getFirebase();
		Firebase.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'SIGN_OUT_SUCCESS' });
			});
	};
};
export default signOut;
