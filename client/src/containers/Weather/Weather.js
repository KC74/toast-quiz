import React from 'react'

const Weather = props => {
    const { ip, forecast } = props
    console.log(forecast)
    return (
        <div className="comp-weather component">
            <p>Weather from: {ip || 'No ip'}</p>
            {forecast ? (
                <div>
                    <p>Timezone: {forecast.timezone}</p>
                    <p>Temperature: {forecast.currently.temperature}</p>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Weather
