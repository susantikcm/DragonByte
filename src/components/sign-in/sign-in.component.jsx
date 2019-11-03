import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
// import CustomCheckBox from '../checkbox/checkbox.component';

import { signInWithGoogle } from '../../firebase/firebase.util';
import { auth } from '../../firebase/firebase.util';

import './sign-in.style.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        // this.setState({
        //     [event.target.id]: event.target.value
        // })
    }

    handleSubmit = async event => {
        event.preventDefault(); 

        const { email, password } = this.state;

        try {
             await auth.signInWithEmailAndPassword(email, password);
            //clear state
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.error(error);
        }
    }

    render(){
        return (
            <div className="sign-in mx-auto mt-5 text-justify">
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>                
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
                    {/* <CustomCheckBox type="checkbox" label="Keep me signed in" /> */}
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}

export default SignIn;