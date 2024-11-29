import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
    return (
        <div className={styles.playList}>
            <h2>{props.playlistName}</h2>
            <Tracklist tracks={props.playlistTracks} removeTrack={props.removeTrack} />
        </div>
    );
}

export default Playlist;