

export const SetUserToken = (token) => {
    return (dispatch) => {
        dispatch({ type: "token", payload : token });
    }
}

export const SetUserProfile = (profile) => {
    return (dispatch) => {
        dispatch({ type: "profile", payload : profile });
    }
}