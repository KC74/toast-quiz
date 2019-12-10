import React from 'react'

const Weather = props => {
    const { forecast } = props
    console.log(forecast)
    return (
        <div className="comp-weather component">
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
