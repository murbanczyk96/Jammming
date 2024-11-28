import React from "react";
import Tracklist from "../Tracklist/Tracklist";


function SearchResults({searchResults}) {
    return (
        <div>
            <h2>Search Results</h2>
            <Tracklist searchResults={searchResults} />
        </div>
    );
}

export default SearchResults;