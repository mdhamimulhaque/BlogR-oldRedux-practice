import { loadBlogs } from "../action/BlogActions";

export const loadBlogsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch(`blogs.json`)
        const data = await res.json()
        if (data.length > 0) {
            dispatch(loadBlogs(data))
        }

    }
}
