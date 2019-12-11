import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Weather from './Weather'
import SearchForm from '../SearchForm/'
import { getWeatherForecast } from '../../redux/modules/weather'

class WeatherContainer extends Component {
    componentDidMount() {
        // TODO
        this.props.dispatch(getWeatherForecast())
    }

    _checkIfLoading(data) {
        const { isLoading, weatherData, ipData } = data
        return isLoading || weatherData.isLoading || ipData.isLoading
    }

    render() {
        const { ipData, weatherData } = this.props.weatherData
        const isLoading = this._checkIfLoading(this.props.weatherData)

        if (isLoading) {
            return (
                <div className="comp-weather container loading">
                    <CircularProgress />
                    <p>Loading Weather Data</p>
                </div>
            )
        }

        return (
            <div className="comp-weather container">
                <p className="app-instructions">
                    Enter a zip code below and
                    <br /> press the button.
                </p>
                <SearchForm required={true} />
                <Weather ip={ipData.data} forecast={weatherData.data} />
            </div>
        )
    }
}

// Map our state to props
const mapStateToProps = store => {
    const { weatherData } = store
    return { weatherData }
}

export default connect(mapStateToProps)(WeatherContainer)
