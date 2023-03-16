import { loadBlogs } from "../action/BlogActions";

export const loadBlogsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blogs`)
        const data = await res.json()
        if (data.length > 0) {
            dispatch(loadBlogs(data))
        }

    }
}
