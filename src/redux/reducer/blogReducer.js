import { LOAD_BLOGS_DATA } from "../actionTypes/actionTypes"

const initialState = {
    blogs: []
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS_DATA:
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state;
    }
}