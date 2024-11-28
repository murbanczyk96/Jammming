import logo from '../../logo.svg';
import './App.module.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Tracklist from "../Tracklist/Tracklist";
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


    useEffect(() => {
        setSearchResults(testSearchResultsData);
    }, []);

    return (
        <div className="App">
            <h1>Jammming!</h1>
            <SearchBar/>
            <SearchResults searchResults={searchResults}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
    );
}

export default App;
