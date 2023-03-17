import { addBlog } from "../action/BlogActions";

export const AddBlogData = (post) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addBlog({
                _id: data.insertedId,
                ...post
            }))
        }
    }
}