import React from 'react';
import PropTypes from 'prop-types';
import ListPage from './pages/ListPage';
import { useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Box } from '@mui/material';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
                <Route path={`${match.url}/:productId`} component={DetailPage} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;