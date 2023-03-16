import { SORT_BY_UPDATE } from "../actionTypes/actionTypes"

export const sortByUpdate = (data) => {
    return {
        type: SORT_BY_UPDATE,
        payload: data
    }
}