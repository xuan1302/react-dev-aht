import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProductThumbnail from '../components/ProductThumbnail';
import { useRouteMatch } from 'react-router-dom';
import useProductDetail from '../hook/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import ProductAddtional from '../components/ProductAddtional';
import ProductReviews from '../components/ProductReviews';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Cart/cartSlice';

DetailPage.propTypes = {

};

const useStyles = makeStyles({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0'
    },
});


function DetailPage(props) {
    const classes = useStyles();
    const { params: { productId }, url } = useRouteMatch();
    const dispath = useDispatch();

    const { product, loading } = useProductDetail(productId);
    console.log(product)
    if (loading) {
        return <Box className='loadding-detail-product'><LinearProgress /></Box>
    }
    const handleAddToCartSubmit = (formValues) => {
        // console.log(formValues)
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValues.quantity,
        });
        dispath(action);
    }
    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />
                <Switch>
                    <Route path={url} exact>
                        <ProductDescription product={product} />
                    </Route>
                    <Route path={`${url}/additional`} component={ProductAddtional} />
                    <Route path={`${url}/reviews`} component={ProductReviews} />
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;