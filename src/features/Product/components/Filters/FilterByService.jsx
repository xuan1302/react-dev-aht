import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

FilterByService.propTypes = {

};

function FilterByService({ filters = {}, onChange }) {
    // const [values, setValues] = useState({
    //     isPromotion: Boolean(filters.isPromotion),
    //     isFreeShip: Boolean(filters.isPromotion),

    // });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        // setValues(prevValue => ({
        //     ...prevValue,
        //     [name]: checked,
        // }));
        if (onChange) onChange({ [name]: checked })
    }
    return (
        <Box>
            <Typography variant='subtitle2'>Dich vu</Typography>
            <ul>
                {
                    [{ value: 'isPromotion', label: 'Co khuyen mai' }, { value: 'isFreeShip', label: 'Mien phi van chuyen' }].map((service) => (
                        <li key={service.value}>
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox
                                        checked={filters[service.value]}
                                        onChange={handleChange}
                                        name={service.value}
                                    />} label={service.label} />
                            </FormGroup>
                        </li>
                    ))
                }
            </ul>
        </Box>
    );
}

export default FilterByService;