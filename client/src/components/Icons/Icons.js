import React from 'react'
import { ReactSVG } from 'react-svg'
import clearDay from './icons/Sun.svg'
import clearNight from './icons/Moon.svg'
import partlyCloudyDay from './icons/Cloud-Sun.svg'
import partlyCloudyNight from './icons/Cloud-Moon.svg'
import cloudy from './icons/Cloud.svg'
import rain from './icons/Cloud-Rain.svg'
import snow from './icons/Cloud-Snow.svg'
import wind from './icons/Wind.svg'
import fog from './icons/Cloud-Fog.svg'
import hail from './icons/Cloud-Hail.svg'
import thunderstorm from './icons/Cloud-Lightning.svg'
import tornado from './icons/Tornado.svg'
import defaultIcon from './icons/Cloud-Download.svg'

const getIcon = icon => {
    let iconSrc
    switch (icon) {
        case 'clear-day':
            iconSrc = clearDay
            break
        case 'clear-night':
            iconSrc = clearNight
            break
        case 'rain':
            iconSrc = rain
            break
        case 'snow':
            iconSrc = snow
            break
        case 'wind':
            iconSrc = wind
            break
        case 'fog':
            iconSrc = fog
            break
        case 'cloudy':
            iconSrc = cloudy
            break
        case 'partly-cloudy-day':
            iconSrc = partlyCloudyDay
            break
        case 'partly-cloudy-night':
            iconSrc = partlyCloudyNight
            break
        case 'hail':
            iconSrc = hail
            break
        case 'thunderstorm':
            iconSrc = thunderstorm
            break
        case 'tornado':
            iconSrc = tornado
            break
        default:
            iconSrc = defaultIcon
            break
    }
    return (
        <ReactSVG src={iconSrc} className={`forecast-icon icon icon-${icon}`} />
    )
}

const Icons = props => {
    return <div className="forecast-icon container">{getIcon(props.icon)}</div>
}

export default Icons
