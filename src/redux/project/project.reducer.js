import { ProjectActionTypes } from './project.types';

const INITAL_STATE = {
    searchField: '',
    isLoading: false,
    projects: [],
    error: ''
}

export default (state = {}, action) => {
    switch (action.type) {
      case'FETCH_TODOS':
        return action.payload;
      default:
        return state;
    }
  };

export const searchProjects = (state=INITAL_STATE, action={}) => {
    //console.log(action.type);
    switch(action.type) {
        case ProjectActionTypes.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField:action.payload })
            //return {...state, searchField:action.payload }
            //use 'Spread operator' above for same purpose with cleaner code 
            //Spread opr takes object 'state' and destructure its properties into 'new state' object
            //assigning new value to any property existed in the 'new state' object,
            //would replace value in the 'new state' object 
            default:
            return state;
    }
}

export const requestProjects = (state=INITAL_STATE, action={}) => {
    switch(action.type) {
        case ProjectActionTypes.REQUEST_PROJECTS_LOADING:
            return {...state, isLoading:true }
        case ProjectActionTypes.REQUEST_PROJECTS_SUCCESS:
            return {...state, projects:action.payload, isLoading: false }
        case ProjectActionTypes.REQUEST_PROJECTS_FAILED:
            return {...state, error:action.payload, isLoading: false }
        default:
            return state;  
    }
}

export const addProject = (state=INITAL_STATE, action={}) => {
    switch(action.type) {
        case ProjectActionTypes.ADD_PROJECT_SUCCESS:
            console.log('create project successful', action.project);
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case ProjectActionTypes.ADD_PROJECT_FAILED:
            console.log('create project failed', action.error);
            return state;
        default:
            return state;  
    }
}