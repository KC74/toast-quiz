import React from 'react'
import Icons from '../../components/Icons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles.js'

const Weather = props => {
    const { forecast } = props
    const classes = useStyles()

    if (!forecast || !forecast.currently || !forecast.timezone) {
        return (
            <div className="comp-weather component">
                <p>No weather data available</p>
            </div>
        )
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.location} gutterBottom>
                    {forecast.timezone}
                </Typography>
                <Icons icon={forecast.currently.icon} />
                <Typography
                    className={classes.summary}
                    variant="h5"
                    component="h2"
                >
                    {forecast.currently.summary}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Temperature: {forecast.currently.temperature}{' '}
                    <span className="temp-symbol">F</span>
                </Typography>
                <Typography
                    className={classes.info}
                    variant="body2"
                    component="p"
                >
                    Feels like: {forecast.currently.apparentTemperature}{' '}
                    <span className="temp-symbol">F</span>
                </Typography>
                <Typography
                    className={classes.info}
                    variant="body2"
                    component="p"
                >
                    Humidity: {forecast.currently.humidity * 100}%
                </Typography>
                <Typography
                    className={classes.info}
                    variant="body2"
                    component="p"
                >
                    Cloud Cover: {forecast.currently.cloudCover * 100}%
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Weather
