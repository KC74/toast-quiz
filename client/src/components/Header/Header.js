import React from 'react'

const Header = props => {
    const { logo } = props
    return (
        <header className="App-header">
            {logo && <img src={logo} className="App-logo" alt="logo" />}
            <p>ENV: {process.env.NODE_ENV}</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

export default Header
