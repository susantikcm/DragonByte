import { UserActionTypes } from './user.types';

//user action is literally just a function that return object
//the only thing is each object is in the correct format that the action is expected to be

//so the setCurrentUser function is going to take one parameter of user object, then 
//return object with the type is SET_CURRENT_USER, exact same string the userReducer is expecting
//so make sure always align action creator's type with the reducer type, 
//in order to create appropriate efect in the reducer 
//then set the user as payload, payload is optional property on action object
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});