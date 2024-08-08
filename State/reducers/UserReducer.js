
const UserReducer = (state = 0, action) => {
    switch (action.type) {
        case "token":
            return state + action.payload;
        case "profile":
            return {state: action.payload};
        default:
            return state;
    }
}

export default UserReducer;