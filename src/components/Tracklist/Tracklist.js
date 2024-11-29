import React from "react";
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <div>
            {props.tracks && props.tracks.map((track) => (
                <Track track={track} key={track.id} addTrack={props.addTrack} removeTrack={props.removeTrack} />))}
        </div>
    );
}

export default Tracklist;