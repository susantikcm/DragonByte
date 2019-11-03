import { RobotActionTypes } from './robot.types';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    //console.log(action.type);
    switch(action.type) {
        case RobotActionTypes.CHANGE_SEARCH_FIELD:
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

const initialStateRobots = {
    isLoading: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case RobotActionTypes.REQUEST_ROBOTS_LOADING:
            return {...state, isLoading:true }
        case RobotActionTypes.REQUEST_ROBOTS_SUCCESS:
            return {...state, robots:action.payload, isLoading: false }
        case RobotActionTypes.REQUEST_ROBOTS_FAILED:
            return {...state, error:action.payload, isLoading: false }
        default:
            return state;  
    }
}