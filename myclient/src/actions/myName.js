import api from "./api";

export const ACTION_TYPES = {
    FETCH_NAME: 'FETCH_NAME'
}

export const fetchMyName = () => dispatch => {
    api.myName().fetchMyName()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_NAME,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}