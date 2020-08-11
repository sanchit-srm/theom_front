import {
    LOGIN,
    LOGOUT } from "../constants/ActionTypes";


const initialState = {
    user: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { 
                user: action.user };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
export default userReducer;