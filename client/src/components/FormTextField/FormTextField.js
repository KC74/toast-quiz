import React from 'react'
import { Field } from 'redux-form'
import TextField from '@material-ui/core/TextField'

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        variant="outlined"
        {...input}
        {...custom}
    />
)

const FormTextField = props => {
    return (
        <div className="form-textfield container">
            <Field component={renderTextField} {...props} />
        </div>
    )
}

export default FormTextField
