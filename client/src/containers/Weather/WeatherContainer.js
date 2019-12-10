import React, { Component } from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'
import { getWeatherForecast } from '../../redux/modules/weather'

class WeatherContainer extends Component {
    componentDidMount() {
        // TODO
        this.props.dispatch(getWeatherForecast())
    }

    render() {
        console.log(this.props)
        const { isLoading, ipData, weatherData } = this.props.weatherData
        return isLoading || weatherData.isLoading || ipData.isLoading ? (
            <div className="comp-loading">Loading...</div>
        ) : (
            <div className="comp-weather container">
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
