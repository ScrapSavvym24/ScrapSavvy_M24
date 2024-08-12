

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

export const SetProduct = (product) => {
    return (dispatch) => {
        dispatch({ type: "product", payload : product });
    }
}
export const SetUserLogout = (user) => {
    return (dispatch) => {
        dispatch({ type: "logout", payload : user });
    }
}