import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {

    return (
        <div className={styles.playList}>
            <input className={styles.inputField} value={props.playlistName}
                   onChange={props.handlePlaylistInputChange}/>
            <Tracklist tracks={props.playlistTracks} removeTrack={props.removeTrack}/>
            <button className={styles.button} onClick={props.savePlaylist}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;