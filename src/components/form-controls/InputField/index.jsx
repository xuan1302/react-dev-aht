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
    return (
        <Controller
            render={({
                field: { onChange, onBlur, value, name, ref },
            }) => (
                <TextField
                    value={value}
                    onChange={onChange} // send value to hook form
                    inputRef={ref} // wire up the input ref
                />
            )}
            name={name}
            control={form.control}
            label={label}
            disabled={disabled}
        />
    );
}

export default InputField;