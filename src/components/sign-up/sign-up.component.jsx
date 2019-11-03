import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.style.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        // this.setState({
        //     [event.target.id]: event.target.value
        // })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            //create user based on email and password entered
            //if succesful user will be signed in and it returns userAuth object
            //the useAuth object in on the key user, that's why we destructure it 
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            //store user to Firestore 
            createUserProfileDocument(user, { displayName });

            //clear state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    render(){            
        return (
            <div className="sign-in mx-auto mt-5 text-justify">
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <FormInput
                        name="displayName"
                        type="text" 
                        value={this.state.displayName} 
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password" 
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange} 
                        label="confirm Password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
         );
    }
}

export default SignUp;