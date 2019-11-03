import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { searchProjects, requestProjects } from './project/project.reducer';
import { searchRobots, requestRobots } from './robot/robot.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    searchProjects,
    requestProjects,
    searchRobots,
    requestRobots,
});
export default rootReducer;
