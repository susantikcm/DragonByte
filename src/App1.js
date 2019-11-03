import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Routes from './components/routes';

import { auth, createUserProfileDocument } from './firebase/firbase.util';

import './App.css';

import { setCurrentUser } from './redux/user/user.actions';

//import Page1 from '../Components/page1';
//import Page2 from '../Components/page2';
//import Page3 from '../Components/page3';
//import AsyncComponent from '../Components/AsyncComponent';

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         currentUser: null
    //         // route: 'page1',
    //         // component: null
    //     }
    // }

    //a method that is null by default
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;
        
        //auth.onAuthStateChanged() is method provided by firebase/auth library
        //it returns userAuth => current signed-in user's authentication object sent by Firebase
        //it also return a function, that when called will close the subscription
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            //console.log(userAuth);
 
            //remember that user auth could be null when user is signed out
            //if user is signed out, we don't want to set anything to state
            //if user is signed in, store data to Firestore and app state  
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                
                //subscribe or listen to the userRef with onSnapshot() that:
                //- checks for any changes to the snapshot 
                //- gets the acutal data of the userRef
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({ 
                        currentUser: { id: snapshot.id, ...snapshot.data() }
                    },
                    //because setSate is Asynchronous, console.log can go after setState 
                    //setState will call our function below after its state is fully processed
                    // () => { 
                    //     console.log(this.state); 
                    // }
                    );
                })                
            }

            //if user sign out = userAuth is null, we also want to set state to userAuth  
            setCurrentUser({ userAuth });
        });        
    }

    //firebase auth is an open subscription and need to be unsbscribed before component unmount
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    // onRouteChange = (route) => {
    //     //no code splitting
    //     this.setState({ route: route });

    //     //with code splitting
    //     // if(route === 'page1') {
    //     //     this.setState({ route: route });
    //     // }
    //     // else if (route === 'page2') {
    //     //     import('../Components/page2')
    //     //     .then((Page2) => {
    //     //         this.setState({ route: route, component: Page2.default })
    //     //     });
    //     // }
    //     // else if (route === 'page3') {
    //     //     import('../Components/page3')
    //     //     .then((Page3) => {
    //     //         this.setState({ route: route, component: Page3.default })
    //     //     });
    //     // }
    // }

    render() {
        return (
            <div className="App">
                <Header />
                <Routes />
           </div>
        );

        // if(this.state.route === 'page1') {
        //     return <Page1 onRouteChange={this.onRouteChange} />
        // }
        // else if(this.state.route === 'page2') {
        //     const AsyncPage2 = AsyncComponent(() => import('../Components/page2'))
        //     return <AsyncPage2 onRouteChange={this.onRouteChange} />
        // }
        // else if(this.state.route === 'page3') {
        //     const AsyncPage3 = AsyncComponent(() => import('../Components/page3'))
        //     return <AsyncPage3 onRouteChange={this.onRouteChange} />
        // }
        
        // if(this.state.route === 'page1') {
        //     return <Page1 onRouteChange={this.onRouteChange} />
        // }
        // else {
        //     return <this.state.component onRouteChange={this.onRouteChange} />
        // }
    }
}

const mapDispatchToProps = dispatch => ({
    //go to a function that gets the user object and then call dispatch
    //dispatch() is a function that let redux knows that whatever object we are passing to it,
    //it is going to be an action object that it is going to send to all reducers 
    //return setCurrentUser
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App); 