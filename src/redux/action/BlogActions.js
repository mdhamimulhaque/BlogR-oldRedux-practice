import { LOAD_BLOGS_DATA } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS_DATA,
        payload: data
    }
}