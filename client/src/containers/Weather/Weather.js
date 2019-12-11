import React from 'react'
import Icons from '../../components/Icons'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    card: {
        width: 300,
        maxWidth: '100%',
        backgroundColor: '#383e49',
        margin: '1rem auto',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    location: {
        fontSize: 14,
        color: 'orange',
    },
    pos: {
        marginBottom: 12,
        color: '#ffffff',
    },
    info: {
        color: '#ffffff',
    },
    summary: {
        color: '#60dbfc',
    },
})

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
                    Temperature: {forecast.currently.temperature} F
                </Typography>
                <Typography
                    className={classes.info}
                    variant="body2"
                    component="p"
                >
                    Apparent Temperature:{' '}
                    {forecast.currently.apparentTemperature} F
                </Typography>
                <Typography
                    className={classes.info}
                    variant="body2"
                    component="p"
                >
                    Humidity: {forecast.currently.humidity * 100}
                </Typography>
                <Typography
                    className={classes.info}
                    variant="body2"
                    component="p"
                >
                    Cloud Cover: {forecast.currently.cloudCover}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Weather
