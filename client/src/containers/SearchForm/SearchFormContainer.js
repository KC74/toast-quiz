import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import SearchForm from './SearchForm'
import { getForecastByZip } from '../../redux/modules/weather'

class SearchFormContainer extends Component {
    _handleSubmit(zip) {
        if (!zip) {
            return false
        }
        this.props.dispatch(getForecastByZip(zip))
    }

    render() {
        const { zip, required } = this.props

        return (
            <div className="comp-searchForm container">
                <SearchForm
                    required={required}
                    handleSubmit={() => this._handleSubmit(zip)}
                />
            </div>
        )
    }
}
// export default SearchFormContainer
// Redux form HOC
const searchForm = reduxForm({
    form: 'searchForm',
})(SearchFormContainer)

// export default searchForm
// Connect our store
export default connect(store => {
    // Grab our values
    const values = formValueSelector('searchForm')
    let zip = values(store, 'zip')
    console.log(store)
    return { zip }
})(searchForm)
