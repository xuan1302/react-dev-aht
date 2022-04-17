import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

ProductInfo.propTypes = {

};

function ProductInfo({ product = {} }) {
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
    return (
        <Box>
            <Typography>{name}</Typography>
            <Typography>{shortDescription}</Typography>
            <Box>
                <Box component='span'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salePrice)}</Box>
                <Box component='span'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}</Box>
                <Box component='span'>{`${promotionPercent}%`}</Box>
            </Box>
        </Box>
    );
}

export default ProductInfo;