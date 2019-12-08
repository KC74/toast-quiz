import express from 'express' // express node
import bodyParser from 'body-parser' // body parsing of requests
import cors from 'cors' // cross origin settings

export const app = express()
const router = express.Router()

app.set('HTTP_PORT', 8080)

/**
 * CORS SETUP
 */

var whitelist = ['localhost', 'localhost:3000']

var corsOptionsDelegate = function(req, callback) {
    var corsOptions
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS responseyeah
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use('*', cors(corsOptionsDelegate))

app.get('/', function(req, res) {
    res.writeHead(200)
    res.end('Hello, world!')
})

app.use(router)

/**
 * Check our environment and start our server.
 *
 * HTTPS server is using COMODO SSL
 */
app.listen(app.get('HTTP_PORT'), function() {
    // init our FCTG client
    console.log(`listening on port ${app.get('HTTP_PORT')}`)
})
