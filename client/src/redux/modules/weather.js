import fetch from 'node-fetch'

// INITIAL STATE
const initialState = {
    ipData: {
        isLoading: false,
        data: null,
        error: null,
    },
    weatherData: {
        isLoading: false,
        data: null,
        error: null,
    },
    isLoading: false,
}

// ACTIONS
const GET_IP_BEGIN = 'GET_IP_BEGIN'
const GET_IP_SUCCESS = 'GET_IP_SUCCESS'
const GET_IP_ERROR = 'GET_IP_ERROR'

const GET_WEATHER_FORECAST_BEGIN = 'GET_WEATHER_FORECAST_BEGIN'
const GET_WEATHER_FORECAST_SUCCESS = 'GET_WEATHER_FORECAST_SUCCESS'
const GET_WEATHER_FORECAST_ERROR = 'GET_WEATHER_FORECAST_ERROR'

// ACTION CREATORS
const getIpBegin = () => {
    return {
        type: GET_IP_BEGIN,
    }
}

const getIpSuccess = ip => {
    return {
        type: GET_IP_SUCCESS,
        ipData: ip,
    }
}

const getIpError = error => {
    return {
        type: GET_IP_ERROR,
        ipData: error,
    }
}

const getWeatherBegin = () => {
    return {
        type: GET_WEATHER_FORECAST_BEGIN,
    }
}

const getWeatherSuccess = weather => {
    return {
        type: GET_WEATHER_FORECAST_SUCCESS,
        weatherData: weather,
    }
}

const getWeatherError = error => {
    return {
        type: GET_WEATHER_FORECAST_ERROR,
        weatherData: error,
    }
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_IP_BEGIN:
            return {
                ...state,
                ipData: {
                    ...action.ipData,
                    isLoading: true,
                },
                isLoading: true,
            }

        case GET_IP_SUCCESS:
            return {
                ...state,
                ipData: {
                    data: action.ipData,
                    isLoading: false,
                },
                isLoading: false,
            }
        case GET_IP_ERROR:
            return {
                ...state,
                ipData: {
                    error: action.error,
                    isLoading: false,
                },
                isLoading: false,
            }
        case GET_WEATHER_FORECAST_BEGIN:
            return {
                ...state,
                weatherData: {
                    isLoading: true,
                },
                isLoading: true,
            }

        case GET_WEATHER_FORECAST_SUCCESS:
            return {
                ...state,
                weatherData: {
                    data: action.weatherData,
                    isLoading: false,
                },
                isLoading: false,
            }
        case GET_WEATHER_FORECAST_ERROR:
            return {
                ...state,
                weatherData: {
                    error: action.error,
                    isLoading: false,
                },
                isLoading: false,
            }

        default:
            return state
    }
}

/**
 * Submit all form values to external server
 */
const getUserIp = async dispatch => {
    dispatch(getIpBegin())
    try {
        // Fetch the users ip
        const ipReq = await fetch('https://api.ipify.org?format=json')
        // Get the json object
        const ipJson = await ipReq.json()
        const { ip } = ipJson
        if (ip) {
            dispatch(getIpSuccess(ip))
            return ip
        }

        return false
    } catch (error) {
        dispatch(getIpError(error))
        alert('Error getting the ip')
    }
}

export const getForecastByZip = zip => {
    return async dispatch => {
        dispatch(getWeatherBegin())
        try {
            const endpoint = `/weather/forecast/zip/${zip}`
            const forecastReq = await fetch(endpoint)
            const forecast = await forecastReq.json()
            dispatch(getWeatherSuccess(forecast))
        } catch (error) {
            dispatch(getWeatherError(error))
            alert('Error getting the forecast')
        }
    }
}

/**
 *
 */
export const getWeatherForecast = () => async dispatch => {
    dispatch(getWeatherBegin())
    try {
        const ip = await getUserIp(dispatch)
        if (!ip) {
            dispatch(getWeatherError('Error getting the ip'))
        } else {
            const weatherReq = await fetch(`/weather/forecast/welcome/${ip}`)
            const weatherJson = await weatherReq.json()
            dispatch(getWeatherSuccess(weatherJson))
        }
    } catch (error) {
        dispatch(getWeatherError(error))
        alert('Error getting the forecast')
    }
}
