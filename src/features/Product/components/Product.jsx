import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Skeleton } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail ? `https://api.ezfrontend.com${product.thumbnail?.url}` : 'https://via.placeholder.com/444';
    const history = useHistory();
    const handleClick = () => {
        history.push(`/products/${product.id}`)
    }
    return (
        <Box padding={1} onClick={handleClick}>
            <Box padding={1}>
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>

            <Typography variant='body2'>
                {product.name}

            </Typography>
            <Typography variant='body2'>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}</Typography>
        </Box>
    );
}

export default Product;