import { ACTION_TYPES } from "../actions/myName";
const initialState = {
    list: []
}


export const myName = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_NAME:
            return {
                ...state,
                NAME: action.payload,
            }
        
        default:
            return state
    }
}