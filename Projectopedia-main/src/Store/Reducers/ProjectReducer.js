const initState = {
	projects: [],
};

const ProjectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('Created Project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('Error in Creating Project', action.err);
			return state;
		default:
			return state;
	}
};

export default ProjectReducer;
