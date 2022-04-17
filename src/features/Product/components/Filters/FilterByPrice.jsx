import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';

FilterByPrice.propTypes = {

};

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,

    });
    const handleSubmit = () => {
        if (onChange) onChange(values)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValue => ({
            ...prevValue,
            [name]: value,
        }));
    }
    return (
        <Box>
            <Typography variant='subtitle2'>Gia</Typography>
            <Box>
                <TextField
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                />
                <span>-</span>
                <TextField
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                />
                <button variant="outline" color='primary' onClick={handleSubmit}>Ap dung</button>
            </Box>
        </Box>
    );
}

export default FilterByPrice;