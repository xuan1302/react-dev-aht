import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.errors[name];
    console.log(formState.errors[name])

    return (
        <Controller
            render={({
                field: { onChange, onBlur, value, name, ref },
            }) => (
                <TextField
                    value={value}
                    onChange={onChange} // send value to hook form
                    inputRef={ref} // wire up the input ref
                    label={label}
                    disabled={disabled}
                    error={!!hasError}
                    helperText={formState.errors[name]?.message}
                />
            )}
            name={name}
            control={form.control}
        />
    );
}

export default InputField;