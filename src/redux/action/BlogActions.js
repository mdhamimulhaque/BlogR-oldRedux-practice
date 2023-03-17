import { ADD_BLOG, ADD_READING_HISTORY, LOAD_BLOGS_DATA } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS_DATA,
        payload: data
    }
}

export const addReadingHistory = (data) => {
    return {
        type: ADD_READING_HISTORY,
        payload: data
    }
}
export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data
    }
}