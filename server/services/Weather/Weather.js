import fetch from 'node-fetch'

export default class Weather {
    constructor() {
        // TODO
        this._forecastUrl = 'https://api.darksky.net/forecast'
        this._ipStackUrl = 'http://api.ipstack.com'
    }

    async getLocationOfIp(ip) {
        if (!ip) {
            return false
        }
        console.log('Getting location of: %s', ip)
        try {
            const endpoint = `${this.ipStackUrl}/${ip}?access_key=${process.env.IPSTACK_KEY}`
            const locationReq = await fetch(endpoint)
            const locationData = await locationReq.json()
            let cords
            if (locationData.latitude && locationData.longitude) {
                cords = `${locationData.latitude},${locationData.longitude}`
            }
            return cords
        } catch (error) {
            console.error(error)
        }
    }

    async getCurrentForecast(cords) {
        if (!cords) {
            return false
        }
        console.log('Getting forecast for cords: %s', cords)
        // TODO
        try {
            const endpoint = `${this.forecastUrl}/${process.env.DARKSKY_KEY}/${cords}`
            const data = await fetch(endpoint)
            const weather = await data.json()
            const { timezone, currently } = weather

            return { timezone, currently }
        } catch (error) {
            return error
        }
    }

    get forecastUrl() {
        return this._forecastUrl
    }

    get ipStackUrl() {
        return this._ipStackUrl
    }

    set forecastUrl(forecastUrl) {
        this._forecastUrl = forecastUrl
    }

    set ipStackUrl(ipStackUrl) {
        this._ipStackUrl = ipStackUrl
    }
}
