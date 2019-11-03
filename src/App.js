import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Routes from './components/routes/routes.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';

import './App.css';

import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
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
                    setCurrentUser({ id: snapshot.id, ...snapshot.data() },
                    //because setSate is Asynchronous, console.log can go after setState 
                    //setState will call our function below after its state is fully processed
                    // () => { 
                    //     console.log(this.state); 
                    // }
                    );
                })                
            }

            //if user sign out = userAuth is null, we also want to set state to userAuth  
            setCurrentUser(userAuth);
        });        
    }

    //firebase auth is an open subscription and need to be unsbscribed before component unmount
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Routes />
           </div>
        );
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