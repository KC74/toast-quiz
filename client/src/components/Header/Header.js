import React from 'react'

const Header = props => {
    const { logo } = props
    return (
        <header className="App-header">
            {logo && <img src={logo} className="App-logo" alt="logo" />}
            <p>ENV: {process.env.NODE_ENV}</p>
            <p className="App-link">
                Enter a zip code below and
                <br /> press the button.
            </p>
        </header>
    )
}

export default Header
