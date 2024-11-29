import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";


function SearchResults(props) {
    return (
        <div className={styles.searchResults}>
            <h2>Search Results</h2>
            <Tracklist tracks={props.searchResults} addTrack={props.addTrack} />
        </div>
    );
}

export default SearchResults;