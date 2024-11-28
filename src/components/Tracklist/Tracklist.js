import React from "react";
import Track from "../Track/Track";

function Tracklist({tracks}) {
    return (
        <div>
            {tracks && tracks.map((track) => (<Track track={track} key={track.id}/>))}
        </div>
    );
}

export default Tracklist;