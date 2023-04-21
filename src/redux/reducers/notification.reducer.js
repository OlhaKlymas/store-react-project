import { SET_NOTIFICATION } from './../constants/notification.constants';

const initialState = {
    notification: ''
}
    
export const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTIFICATION: 
            return {
                ...state,
                notification: action.payload
            }
        default:
            return state
    }
}
