import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AddCircleOutline, RemoveCircle, RemoveCircleOutline } from '@mui/icons-material';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function QuantityField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState, setValue } = form;
    const hasError = formState.errors[name];
    return (
        <div>
            <FormControl error={!!hasError} fullWidth variant="outlined" margin='normal'>
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <Controller
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Box >
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 0)}>
                                <RemoveCircleOutline />
                            </IconButton>
                            <OutlinedInput
                                type="number"
                                onChange={onChange} // send value to hook form
                                label={label}
                                fullWidth
                                value={value}
                            />
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                                <AddCircleOutline />
                            </IconButton>
                        </Box>
                    )}
                    name={name}
                    control={form.control}
                />
                <FormHelperText >{formState.errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>
    );
}

export default QuantityField;