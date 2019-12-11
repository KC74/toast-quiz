const initConfig = app => {
    app.set('HTTP_PORT', 8080)
    app.set('NODE_ENV', process.env.NODE_ENV)
}

export default initConfig

export const corsConfig = {
    whitelist: ['http://localhost', 'http://localhost:3000'],
}
