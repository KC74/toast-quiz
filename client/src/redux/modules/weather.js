import fetch from 'node-fetch'

// INITIAL STATE
const initialState = {
    isLoading: false,
    ip: null,
    error: null,
}

// ACTIONS
const GET_IP_BEGIN = 'GET_IP_BEGIN'
const GET_IP_SUCCESS = 'GET_IP_SUCCESS'
const GET_IP_ERROR = 'GET_IP_ERROR'

// ACTION CREATORS
export const getIpBegin = () => {
    return {
        type: GET_IP_BEGIN,
    }
}

export const getIpSuccess = options => {
    return {
        type: GET_IP_SUCCESS,
        options,
    }
}

export const getIpError = error => {
    return {
        type: GET_IP_ERROR,
        error,
    }
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_IP_BEGIN:
            return {
                ...state,
                isLoading: true,
            }

        case GET_IP_SUCCESS:
            return {
                ...state,
                data: action,
                isLoading: false,
            }
        case GET_IP_ERROR:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

/**
 * Submit all form values to external server
 *
 * @param {object} values - all form values
 */
// export const submitForm = values => async dispatch => {
//     dispatch(submitFormBegin())
//     try {
//         let request = await fetch(config.host, {
//             method: 'POST',
//             body: JSON.stringify(values),
//         })
//         let body = await request.json()
//         dispatch(submitFormSuccess(values, body.status === 'success'))
//     } catch (error) {
//         dispatch(submitFormError(error))
//         alert('Error submitting the form')
//     }
// }
