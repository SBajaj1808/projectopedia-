import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/Signup';
import CreateProject from './Components/Projects/CreateProject';
class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/project/:id" component={ProjectDetails} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/createproject" component={CreateProject} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
