import logo from '../../logo.svg';
import './App.module.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Tracklist from "../Tracklist/Tracklist";

function App() {
    return (
        <div className="App">
            <h1>Jammming!</h1>
            <SearchBar/>
            <SearchResults/>
            <Tracklist/>
        </div>
    );
}

export default App;
