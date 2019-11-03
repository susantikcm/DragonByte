import { UserActionTypes } from './user.types';

//userReducer is just the INITIAL_STATE object with the currentUser value will get set whenever the SET_CURRENT_USER action fires

//when we fire the state for the first time, redux doesn't know we have any state
//so we need to set an initalState
const INITIAL_STATE = {
    currentUser: null
}

//the state is something that the redux store is going to pass to the reducer
//depending on what the type of the action is, the state will be the current state whenever an action fires
const userReducer = (state = INITIAL_STATE, action) => {
    //based on the action.type value, which will be a string
    //if the case of action type is the one that we want, then render something
    //otherwise, by default just return the state 
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
          return {
              ...state,
              currentUser: action.payload
          }
        default:
          return state;
      }
}

export default userReducer;
