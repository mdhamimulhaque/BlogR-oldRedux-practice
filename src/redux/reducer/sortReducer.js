const initialState = {
    ascending: true
}

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case "test":
            return state;
        default:
            return state;
    }
}