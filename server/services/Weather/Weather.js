import fetch from 'node-fetch'

export default class Weather {
    constructor() {
        // TODO
        this._url = 'https://api.darksky.net/forecast'
    }

    async getCurrentForecast(cords) {
        // TODO
        try {
            const endpoint = `${this.url}/${process.env.DARKSKY_KEY}/${cords}`
            const data = await fetch(endpoint)
            const weather = await data.json()
            const { timezone, currently } = weather

            return { timezone, currently }
        } catch (error) {
            return error
        }
    }

    get url() {
        return this._url
    }

    set url(url) {
        this._url = url
    }
}
