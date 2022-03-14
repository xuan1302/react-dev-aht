import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object,
};

function Album({ album }) {
    return (
        <div className='album'>
            <img src={album.thumbnail} />
            <h4>{album.name}</h4>
        </div>
    );
}

export default Album;