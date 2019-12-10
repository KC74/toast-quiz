import React from 'react'
import Icons from '../../components/Icons'

const Weather = props => {
    const { forecast } = props
    console.log(forecast)
    return (
        <div className="comp-weather component">
            {forecast ? (
                <div>
                    <p>Location: {forecast.timezone}</p>
                    <Icons icon={forecast.currently.icon} />
                    <p>{forecast.currently.summary}</p>
                    <p>Temperature: {forecast.currently.temperature}</p>
                    <p>
                        {' '}
                        Apparent Temperature:{' '}
                        {forecast.currently.apparentTemperature}
                    </p>
                    <p>Humidity: {forecast.currently.humidity * 100}</p>
                    <p>Cloud Cover: {forecast.currently.cloudCover}</p>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Weather
