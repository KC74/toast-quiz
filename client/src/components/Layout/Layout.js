import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = props => {
    const { headerLogo } = props
    return (
        <div className="comp-layout container">
            <Header logo={headerLogo} />
            <div className="comp-layout body">{props.children}</div>
            <Footer />
        </div>
    )
}
export default Layout
