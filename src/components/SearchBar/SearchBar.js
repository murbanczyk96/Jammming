import React, {useState} from "react";
import styles from "./SearchBar.module.css";


function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        if (searchTerm.length > 2) {
            props.onSearch(searchTerm);
            setSearchTerm("")
        } else {
            alert("Please use at least 3 characters");
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.inputField}
            />
            <button onClick={handleSearch} className={styles.button}>Search</button>
        </div>
    );
}

export default SearchBar;