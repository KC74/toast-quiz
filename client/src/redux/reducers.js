import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import weatherReducer from './modules/weather'

export default combineReducers({
    form: formReducer,
    weatherData: weatherReducer,
})
