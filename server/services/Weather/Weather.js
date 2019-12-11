import fetch from 'node-fetch'

export default class Weather {
    constructor() {
        // TODO
        this._forecastUrl = 'https://api.darksky.net/forecast'
        this._ipStackUrl = 'http://api.ipstack.com'
        this._googleUrl =
            'https://maps.googleapis.com/maps/api/geocode/json?address='
    }

    async getCordsByIp(ip) {
        if (!ip) {
            return false
        }
        console.log('Getting coordinates by ip: %s', ip)
        try {
            const endpoint = `${this.ipStackUrl}/${ip}?access_key=${process.env.IPSTACK_KEY}`
            const cordsReq = await fetch(endpoint)
            const cords = await cordsReq.json()
            const { latitude, longitude } = cords
            const cordsString = `${latitude},${longitude}`
            return cordsString
        } catch (error) {
            return error
        }
    }

    async getCordsByZip(zipcode) {
        if (!zipcode) {
            return false
        }
        console.log('Getting coordinates by zipcode: %s', zipcode)
        try {
            const endpoint = `${this.googleUrl}${zipcode}&key=${process.env.GOOGLE_KEY}`
            const cordsReq = await fetch(endpoint)
            const cords = await cordsReq.json()

            if (!cords.results.length) {
                const response = {
                    error: {
                        message: 'Invalid zip entered.',
                    },
                }
                throw response
            }

            const { lat, lng } = cords.results[0].geometry.location
            const cordString = `${lat},${lng}`
            return cordString
        } catch (error) {
            return error
        }
    }

    async getCurrentForecast(cords) {
        if (!cords) {
            return false
        }
        console.log('Getting forecast for cords: %s', cords)
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

    get googleUrl() {
        return this._googleUrl
    }

    set forecastUrl(forecastUrl) {
        this._forecastUrl = forecastUrl
    }

    set ipStackUrl(ipStackUrl) {
        this._ipStackUrl = ipStackUrl
    }

    set googleUrl(googleUrl) {
        this._googleUrl = googleUrl
    }
}
