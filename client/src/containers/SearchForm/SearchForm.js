import React from 'react'
import FormTextField from '../../components/FormTextField'
import Button from '@material-ui/core/Button'

const SearchForm = props => {
    const { handleSubmit } = props
    return (
        <div className="searchForm">
            <form className="searchForm">
                <FormTextField
                    name="zip"
                    required={props.required}
                    label="Zip Code"
                />
                <div>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Search Weather
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
