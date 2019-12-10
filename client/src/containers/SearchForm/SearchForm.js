import React from 'react'
import FormTextField from '../../components/FormTextField'
import Button from '@material-ui/core/Button'

const SearchForm = props => {
    const { handleSubmit } = props
    return (
        <div className="form-warpper">
            <form className="searchForm">
                <FormTextField
                    name="zip"
                    required={props.required}
                    label="Zip Code"
                />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Search Weather
                </Button>
            </form>
        </div>
    )
}

export default SearchForm
