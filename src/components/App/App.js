import styles from './App.module.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import {useEffect, useState} from "react";
import Playlist from "../Playlist/Playlist";

const testSearchResultsData = [
    {
        name: 'Marko',
        artist: 'Polo',
        album: 'Album',
        id: 34342
    },
    {
        name: 'Berlin',
        artist: 'BerlinArtist',
        album: 'BerlinAlbum',
        id: 343343
    },
    {
        name: 'Ammmde',
        artist: 'ammdarits',
        album: 'ammalbum',
        id: 3433433
    }
];

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlistName, setPlaylistName] = useState("Playlist");

    const addTrack = (track) => {
        const isInArray = playlistTracks.some(playlistTrack => playlistTrack.id === track.id);
        if (!isInArray) {
            setPlaylistTracks(prev => [...prev, track]);
        }
    };

    const removeTrack = (track) => {
        setPlaylistTracks(prev => prev.filter(playlistTrack => playlistTrack.id !== track.id));
    };

    const handlePlaylistInputChange = (e) => {
        setPlaylistName(e.target.value);
    };

    useEffect(() => {
        setSearchResults(testSearchResultsData);
    }, []);

    return (
        <div className={styles.App}>
            <h1>Jammming!</h1>
            <SearchBar/>
            <div className={styles.resContainer}>
                <SearchResults searchResults={searchResults} addTrack={addTrack}/>
                <Playlist playlistName={playlistName} playlistTracks={playlistTracks} removeTrack={removeTrack}
                          handlePlaylistInputChange={handlePlaylistInputChange}/>
            </div>
        </div>
    );
}

export default App;
