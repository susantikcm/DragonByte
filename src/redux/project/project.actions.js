import { ProjectActionTypes } from './project.types';

import { firestore } from '../../firebase/firebase.util';

import PROJECT_DATA from '../../pages/project/project.data';

export const setSearchField = (text) => ({
    type: ProjectActionTypes.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestProjects = () => (dispatch) => {
    dispatch({ type: ProjectActionTypes.REQUEST_PROJECTS_LOADING });
    fetch(PROJECT_DATA)
    .then(response => response.json())
    .then(data => dispatch({ type: ProjectActionTypes.REQUEST_PROJECTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ProjectActionTypes.REQUEST_PROJECTS_FAILED, payload: error }))
}

export const addProject = project => ({
    type: ProjectActionTypes.ADD_PROJECT_SUCCESS,
    payload: project
});

export const createProject = (project) => {
    return (dispatch) => {
        //make async call to the database
        firestore.collection('projects').doc('6VvFu87oNjzCAF2M7qxr').collection('project_list').add({
            ...PROJECT_DATA,
            id: 3,
            title: 'Shoot The Monster',
            imageUrl: 'test',
            contentUrl: '324550756',
            createdAt: new Date()
        })
        .then(() => {
            dispatch({ type: ProjectActionTypes.ADD_PROJECT_SUCCESS, PROJECT_DATA })
        })
        .catch((error) => {
            dispatch({ type: ProjectActionTypes.ADD_PROJECT_FAILED, error })
        })
    }
}

// export const createProject = newProject => async dispatch => {
//     dragonByteDatabase.push().set(newProject);
// };

// export const completeProject = completeProjectId => async dispatch => {
//     dragonByteDatabase.child(completeProjectId).remove();
// };

// export const fetchProjects = () => async dispatch => {
//     dragonByteDatabase.on("value", snapshot => {
//     dispatch({
//     type: 'FETCH_PROJECTS',
//     payload: snapshot.val()
//     });
// });
// };
