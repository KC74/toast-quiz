import React, { Component } from 'react'
import fetch from 'node-fetch'
import Weather from './Weather'

class WeatherContainer extends Component {
    constructor() {
        super()
        this.state = {
            weather: {
                ip: null,
                forecast: null,
            },
        }
    }

    componentDidMount() {
        fetch(
            'http://0d2fe5e2.ngrok.io/weather/forecast/49.2588368,-123.0664131'
        )
            .then(async data => {
                try {
                    const weather = await data.json()
                    this.setState({ weather })
                } catch (error) {
                    console.error(error)
                }
            })
            .catch(console.error)
    }
    render() {
        const { ip, forecast } = this.state.weather
        return (
            <div className="comp-weather container">
                <Weather ip={ip} forecast={forecast} />
            </div>
        )
    }
}

export default WeatherContainer
