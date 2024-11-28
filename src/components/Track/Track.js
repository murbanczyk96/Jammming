import React from "react";


function Track({track}) {
    return (
        <div>
            <h3>{track.name}</h3>
            <p>Artist: {track.artist} Album: {track.album}</p>
        </div>
    );
}

export default Track;