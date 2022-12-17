const initState = {
	authError: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_WITH_ERROR':
			console.log('Login Error');
			return {
				...state,
				authError: 'Login Failed',
			};
		case 'LOGIN_WITH_SUCCESS':
			console.log('Login Success');
			return {
				...state,
				authError: null,
			};
		case 'SIGN_OUT_SUCCESS':
			console.log('signed out success');
			return state;
		case 'SIGN_UP_SUCCESS':
			console.log('Signed Up Successfully');
			return {
				...state,
				authError: null,
			};
		case 'SIGN_UP_ERROR':
			console.log('Error Signing Up');
			return {
				...state,
				authError: action.err.message,
			};
		default:
			return state;
	}
};

export default authReducer;
