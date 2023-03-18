import { ADD_BLOG, ADD_READING_HISTORY, DELETE_BLOG, LOAD_BLOGS_DATA, UPDATE_POST } from "../actionTypes/actionTypes"

const initialState = {
    blogs: [],
    ReadingHistory: []
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS_DATA:
            return {
                ...state,
                blogs: action.payload
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            };
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            };
        case UPDATE_POST:

            return {
                ...state,
                blogs: action.payload
            };
        case ADD_READING_HISTORY:
            const alreadyAdded = state.ReadingHistory.find(data => data._id === action.payload._id);

            if (alreadyAdded) {
                return state
            }

            return {
                ...state,
                ReadingHistory: [...state.ReadingHistory, action.payload]
            };
        default:
            return state;
    }
}
