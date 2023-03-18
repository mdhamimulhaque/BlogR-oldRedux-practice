import { deleteBlog } from "../action/BlogActions";

export const DeleteBlogData = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
            dispatch(deleteBlog(id))
        }
    }
}