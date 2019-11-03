import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ROUTES from './routes.paths';

import Home from '../../pages/dashboard/home';
import ProjectList from '../../pages/project/project-list';
import ProjectDetails from '../../pages/project/project-details';
import AddProject from '../../pages/project/add-project';
import RobotList from '../../pages/robot/robot-list';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import About from '../about/about.component';
import Error from '../error';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + ROUTES.HOME} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + ROUTES.SIGN_IN_AND_SIGN_UP} 
                    render={
                        () => this.props.currentUser ? 
                            (<Redirect to={process.env.PUBLIC_URL + ROUTES.HOME} />) 
                            : 
                            (<SignInAndSignUpPage />)
                    }
                />
                <Route path={process.env.PUBLIC_URL + ROUTES.SIGN_IN} component={SignIn} />
                <Route path={process.env.PUBLIC_URL + ROUTES.SIGN_UP} component={SignUp} />
                <Route path={process.env.PUBLIC_URL + ROUTES.PROJECTS} component={ProjectList} />
                <Route path={process.env.PUBLIC_URL + ROUTES.PROJECT_DETAILS} component={ProjectDetails} />
                <Route path={process.env.PUBLIC_URL + ROUTES.ADD_PROJECT} component={AddProject} />
                <Route path={process.env.PUBLIC_URL + ROUTES.ROBOTS} component={RobotList} />
                <Route path={process.env.PUBLIC_URL + ROUTES.ABOUT} component={About} />
                <Route component={Error} />
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Routes);