import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

ProductMenu.propTypes = {

};

function ProductMenu(props) {
    const { url } = useRouteMatch();
    return (
        <Box component='ul' className='list-menu-product'>
            <li>
                <Link component={NavLink} to={url} exact>
                    Description
                </Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/additional`} exact>
                    Ifomation
                </Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/reviews`} exact>
                    Reviews
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;