import React from "react";
import Track from "../Track/Track";

function Tracklist({searchResults}) {
    return (
        <div>
            {searchResults && searchResults.map((track) => (<Track track={track} key={track.id}/>))}
        </div>
    );
}

export default Tracklist;