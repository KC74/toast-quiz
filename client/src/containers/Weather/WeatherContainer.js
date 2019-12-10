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

    async componentDidMount() {
        try {
            // Fetch the users ip
            const ipReq = await fetch('https://api.ipify.org?format=json')
            // Get the json object
            const ipJson = await ipReq.json()
            const { ip } = ipJson
            if (ip) {
                const weatherReq = await fetch(
                    `http://0d2fe5e2.ngrok.io/weather/forecast/${ip}`
                )
                const weatherJson = await weatherReq.json()
                this.setState({ weather: weatherJson })
            }
        } catch (e) {
            console.error(e)
        }
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
