import api from "./api";

export const ACTION_TYPES = {
    FETCH_NAME: 'FETCH_NAME'
}

export const fetchMyName = (name) => dispatch => {
    api.myName().fetchMyName(name)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_NAME,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}