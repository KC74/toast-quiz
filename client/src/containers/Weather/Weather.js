import React from 'react'
import Icons from '../../components/Icons'

const Weather = props => {
    const { forecast } = props

    if (!forecast || !forecast.currently || !forecast.timezone) {
        return (
            <div className="comp-weather component">
                <p>No weather data available</p>
            </div>
        )
    }

    return (
        <div className="comp-weather component">
            <p>{forecast.timezone}</p>
            <Icons icon={forecast.currently.icon} />
            <p>{forecast.currently.summary}</p>
            <p>Temperature: {forecast.currently.temperature}</p>
            <p>
                {' '}
                Apparent Temperature: {forecast.currently.apparentTemperature}
            </p>
            <p>Humidity: {forecast.currently.humidity * 100}</p>
            <p>Cloud Cover: {forecast.currently.cloudCover}</p>
        </div>
    )
}

export default Weather
