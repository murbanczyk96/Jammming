import React, {useEffect, useState} from "react";
import Spotify from "../../api/Spotify";
import styles from './App.module.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlistName, setPlaylistName] = useState("Playlist Name");


    const addTrack = (track) => {
        const isInArray = playlistTracks.some(playlistTrack => playlistTrack.id === track.id);
        if (!isInArray) {
            setPlaylistTracks(prev => [...prev, track]);
        }
    };

    const removeTrack = (track) => {
        setPlaylistTracks(prev => prev.filter(playlistTrack => playlistTrack.id !== track.id));
    };

    const savePlaylist = () => {
        const trackUris = playlistTracks.map(track => track.uri);

        console.log("Saving Uris", trackUris);
        Spotify.savePlaylist(playlistName, trackUris);

        setPlaylistName('Playlist Name');
        setPlaylistTracks([]);
    };

    const filterTracks = (searchResults, playlist) => {
        return searchResults.filter(
            track => !playlist.some(playlistTrack => playlistTrack.id === track.id)
        );
    };

    const handleSearch = async (term) => {
        try {
            const results = await Spotify.searchSpotify(term);
            setSearchResults(results);
        } catch (err) {
            console.log("Error searching Spotify: ", err);
        }
    };

    const handlePlaylistInputChange = (e) => {
        setPlaylistName(e.target.value);
    };

    useEffect(() => {
        Spotify.getAccessToken();
    }, []);

    const filteredPlaylistTracks = filterTracks(searchResults, playlistTracks);

    return (
        <div className={styles.App}>
            <h1 style={{color: 'yellowgreen'}}>Jammming!</h1>
            <SearchBar onSearch={handleSearch}/>
            <div className={styles.resContainer}>
                <SearchResults searchResults={filteredPlaylistTracks} addTrack={addTrack}/>
                <Playlist playlistName={playlistName} playlistTracks={playlistTracks} removeTrack={removeTrack}
                          handlePlaylistInputChange={handlePlaylistInputChange} savePlaylist={savePlaylist}/>
            </div>
        </div>
    );
}

export default App;
