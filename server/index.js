import { config as envConfig } from 'dotenv' // handles our ENV variables
import express from 'express' // express node
import bodyParser from 'body-parser' // body parsing of requests
import cors from 'cors' // cross origin settings
import Weather from './services/Weather'

// Instantiate our ENV variables
// this is only for development purposes, preloading is still the preferred method
const ENV = envConfig()

if (ENV.error) {
    throw ENV.error
}

// Instantiate our Express app and use router
export const app = express()
const router = express.Router()

// Weather client
export const weather = new Weather()

app.set('HTTP_PORT', 8080)
app.set('NODE_ENV', process.env.NODE_ENV)

/**
 * CORS SETUP
 */

var whitelist = [
    'http://5a695ee3.ngrok.io',
    'https://5a695ee3.ngrok.io',
    'http://localhost',
    'http://localhost:3000',
    'http://192.168.0.63:3000',
]

var corsOptionsDelegate = function(req, callback) {
    console.log(req.header('Origin'))
    var corsOptions
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS responseyeah
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use('*', cors(corsOptionsDelegate))

app.get('/', (req, res) => {
    res.writeHead(200)
    res.end('Weather App - Backend')
})

app.get('/weather/forecast/welcome/:ip', async (req, res) => {
    try {
        const ip = req.params.ip
        console.log('Incoming forecase request from %s (initial)', ip)
        const cords = await weather.getCordsByIp(ip)
        const forecast = await weather.getCurrentForecast(cords)
        console.log(cords)
        console.log(forecast)
        res.writeHead(200)
        res.end(JSON.stringify(forecast))
    } catch (error) {
        res.writeHead(400)
        console.error(error)
        const response = JSON.stringify(error)
        res.end(response)
    }
})

app.get('/weather/forecast/zip/:zip', async (req, res) => {
    const zip = req.params.zip
    try {
        const cords = await weather.getCordsByZip(zip)
        const forecast = await weather.getCurrentForecast(cords)
        console.log(cords)
        console.log(forecast)
        res.writeHead(200)
        res.end(JSON.stringify(forecast))
    } catch (error) {
        console.error(error)
        const response = JSON.stringify(error)
        res.writeHead(400)
        res.end(response)
    }
})

app.get('/weather/forecast/cords/:coordinates', async (req, res) => {
    // Grab the cordinates
    const cords = req.params.coordinates
    try {
        console.log('incoming request for forecast')
        const forecast = await weather.getCurrentForecast(cords)
        const ip = req.ip
        console.log(`${ip}\\n${forecast}`)
        res.writeHead(200)
        res.end(JSON.stringify({ ip, forecast }))
    } catch (error) {
        console.error(error)
        const response = JSON.stringify(error)
        res.writeHead(400)
        res.end(response)
    }
})

app.use(router)

/**
 * Start our server.
 */

// Start Dev server
if (app.get('NODE_ENV') === 'development') {
    app.listen(app.get('HTTP_PORT'), function() {
        console.log(`Listening on port: ${app.get('HTTP_PORT')}`)
        console.log(`Environment: ${app.get('NODE_ENV')}`)
    })
}
