import { SORT_BY_UPDATE } from "../actionTypes/actionTypes";

const initialState = {
    ascending: false,
}

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_UPDATE:
            return {
                ...state,
                ascending: action.payload,
            };
        default:
            return state;
    }
}