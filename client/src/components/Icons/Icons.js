import React from 'react'
import clearDay from './icons/Sun.svg'
import clearNight from './icons/Moon.svg'
import partlyCloudyDay from './icons/Cloud-Sun.svg'
import partlyCloudyNight from './icons/Cloud-Moon.svg'

const getIcon = icon => {
    console.log(icon)
    let iconSrc
    switch (icon) {
        case 'clear-day':
            iconSrc = clearDay
            break
        case 'clear-night':
            iconSrc = clearNight
            break
        case 'rain':
            break
        case 'snow':
            break
        case 'sleet':
            break
        case 'wind':
            break
        case 'fog':
            break
        case 'cloudy':
            break
        case 'partly-cloudy-day':
            iconSrc = partlyCloudyDay
            break
        case 'partly-cloudy-night':
            iconSrc = partlyCloudyNight
            break
        case 'hail':
            break
        case 'thunderstorm':
            break
        case 'tornado':
            break
        default:
            break
    }
    return <img src={iconSrc} className="forecast-icon" alt="logo" />
}

const Icons = props => {
    return <div>{getIcon(props.icon)}</div>
}

export default Icons
