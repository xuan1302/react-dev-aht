import React from 'react';
import PropTypes from 'prop-types';

ProductDescription.propTypes = {

};

function ProductDescription({ product = {} }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
    );
}

export default ProductDescription;