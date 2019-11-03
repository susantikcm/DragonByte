import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/button/button.component';

import { createProject } from '../../redux/project/project.actions';

import { firestore } from '../../firebase/firebase.util';

// -> user input new project
// -> fire handleChange(e) event handler that set user input to state
// -> user click submit 
// -> fire handleSubmit(e) event handler that ,
// -> call and execute createProject(this.state) props, passing state as a whole project object, 
// -> execute createProject(project) method from the project action 

class AddProject extends Component {
    state = {
        category: '',
        title: '',
        author: '',
        imageUrl: '',
        contentUrl: '',       
    }    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //this.props.createProject(this.state);
        // console.log(this.state);
        
        const { category, title } = this.state;

        try {

            const docRef = firestore.doc(`projects/${title}`);
            const docSnapshot = await docRef.get();

            if(!docSnapshot.exists) {
                const createdAt = new Date();
        
                try {
                    await docRef.set({
                        category, 
                        createdAt
                    })
                }
                catch (error) {
                    console.log('error creating user', error.message);
                }
            }
            return docRef;
        }
        catch (error) {
            console.error(error);
        }
    }

    render(){
        return (
            <div className="sign-in mx-auto mt-5 text-justify">
                <form onSubmit={this.handleSubmit}>
                    <h2>Add Project</h2>
                    <FormInput
                        id="title"
                        type="text" 
                        value={this.state.title} 
                        handleChange={this.handleChange}
                        label="Title"
                        required
                    />
                    <FormInput
                        id="category"
                        type="text" 
                        value={this.state.category} 
                        handleChange={this.handleChange}
                        label="Category"
                        required
                    />
                    <FormInput
                        id="author"
                        type="text" 
                        value={this.state.author} 
                        handleChange={this.handleChange}
                        label="Author"
                        required
                    />
                    <FormInput
                        id="imageUrl"
                        type="text" 
                        value={this.state.imageUrl} 
                        handleChange={this.handleChange}
                        label="Image Url"
                        required
                    />
                    <FormInput
                        id="contentUrl"
                        type="text" 
                        value={this.state.contentUrl} 
                        handleChange={this.handleChange}
                        label="Content Url"
                        required
                    />
                    <CustomButton type="submit">Create</CustomButton>
                </form>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(AddProject);