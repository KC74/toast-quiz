import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = props => {
    const { headerLogo } = props
    return (
        <div className="comp-layout container">
            <Header logo={headerLogo} />
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout
