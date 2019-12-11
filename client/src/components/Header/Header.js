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
            <p>ENV: {process.env.NODE_ENV}</p>
        </header>
    )
}

export default Header
