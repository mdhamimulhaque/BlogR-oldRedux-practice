import { updatePost } from "../action/BlogActions";

export const UpdatePostData = (post, _id) => {

    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blogs/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)

        })
        const data = await res.json();
        if (data.modifiedCount) {
            dispatch(updatePost(post));
        }
    }
}