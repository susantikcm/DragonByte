import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomCardList from '../../components/card-list/card-list.component';
//import SearchBox from '../../components/searchBox';
import ErrorBoundary from '../../components/errorBoundary';

import PROJECT_DATA from './project.data';
import { requestProjects, setSearchField } from '../../redux/project/project.actions';

//mapping the states from reducers
const mapStateToProps = state => {
    return  {
        searchField: state.searchProjects.searchField,
        isLoading: state.requestProjects.isLoading,
        projects: state.requestProjects.projects,
        error: state.requestProjects.error,
    }
}

//mapping the functions from actions
const mapDispatchToProps = (dispatch) =>  {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //the dispatch need the requestProjects to return a function 
        onRequestProjects: () => dispatch(requestProjects())
    }
}

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECT_DATA
        }    
    }

    // handleClick = completeProjectId => {
    //     const { completeProject } = this.props;
    //     completeProject(completeProjectId);
    // };

    // componentDidMount() {
    //     this.props.onRequestProjects();
    // }

    render() {
        const { projects } =  this.state;

        return (
            <ErrorBoundary>
            {
                projects.map( ({ id, ...otherProjectProps }) => (
                    <CustomCardList key={id} {...otherProjectProps}  />
                ))
            }
            </ErrorBoundary>
        )

        // const { searchField, projects, isLoading } =  this.props;
        // const { searchField, onSearchChange, projects, isLoading } =  this.props;
        // const filteredProjects = projects.filter(project => {
        //     return project.name.toLowerCase().includes(searchField.toLowerCase());
        // })
        
        // return isLoading ? 
        // ( <h1>Loading Projects...</h1> ) :  
        // (
        //     <div>
        //         <SearchBox searchChange={onSearchChange} />
        //             <ErrorBoundary>
        //                 <CardListProject projects={filteredProjects} />
        //             </ErrorBoundary>
        //     </div>
        // );
    }
}
//export default ProjectPage; 
//The connect component from react-redux package
//it is a 'higher order function', means a function that return function
//mapDispatchToProps = mapActionToProps
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList); 
