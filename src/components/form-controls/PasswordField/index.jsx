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

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((x) => !x);
    }
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.errors[name];
    console.log(formState.errors[name])



    return (
        <div>
            {/* <Controller
                render={({
                    field: { onChange, onBlur, value, name, ref },
                }) => (
                    <TextField
                        value={value}
                        variant='outlined'
                        onChange={onChange} // send value to hook form
                        inputRef={ref} // wire up the input ref
                        label={label}
                        fullWidth
                        margin='normal'
                        disabled={disabled}
                        error={!!hasError}
                        helperText={formState.errors[name]?.message}
                    />
                )}
                name={name}
                control={form.control}
            /> */}


            <FormControl error={!!hasError} fullWidth variant="outlined" margin='normal'>
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <Controller
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <OutlinedInput
                            // id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={onChange} // send value to hook form
                            label={label}
                            fullWidth
                            value={value}
                            endAdornment={
                                <InputAdornment position="end">

                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    )}
                    name={name}
                    control={form.control}
                />
                <FormHelperText >{formState.errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>
    );
}

export default PasswordField;