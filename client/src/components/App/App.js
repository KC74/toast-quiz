import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from '../../redux/store'
import Layout from '../Layout'
import Weather from '../../containers/Weather'
import logo from './logo.svg'

// Initialize the store
const store = configStore()

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Layout headerLogo={logo}>
                        <Weather />
                    </Layout>
                </Provider>
            </div>
        )
    }
}

export default App
