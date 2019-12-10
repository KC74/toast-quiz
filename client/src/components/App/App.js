import React, { Component } from 'react'
import Layout from '../Layout'
import Weather from '../../containers/Weather'
import logo from './logo.svg'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout headerLogo={logo}>
                    <Weather />
                </Layout>
            </div>
        )
    }
}

export default App
