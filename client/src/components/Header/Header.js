import React from 'react'
import { ReactSVG } from 'react-svg'
import CircularProgress from '@material-ui/core/CircularProgress'

const Header = props => {
    const { logo } = props
    return (
        <header className="App-header">
            {logo && (
                <ReactSVG
                    src={logo}
                    className="logo"
                    loading={() => <CircularProgress />}
                />
            )}
            <h1 className="title">
                <span className="toast-span">Toast</span> - Weather App
            </h1>
        </header>
    )
}

export default Header
