import React from "react";
import PropTypes from "prop-types";
import Album from "../AlbumItem/Album";
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};


function AlbumList({ albumList }) {
    return <ul className="album-list">
        {albumList.map(album => (
            <li key={album.id}>
                <Album album={album}/>
            </li>
        ))}
    </ul>;
}

export default AlbumList;