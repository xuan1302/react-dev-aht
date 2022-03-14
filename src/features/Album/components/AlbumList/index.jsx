import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

import './style.scss';
AlbumList.propTypes = {
    albumList: PropTypes.array,
};
AlbumList.defaultProps = {
    albumList: [],
}
function AlbumList({ albumList }) {
    return (
        <ul className='listalbum'>
            {
                albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))
            }
        </ul>
    );
}

export default AlbumList;