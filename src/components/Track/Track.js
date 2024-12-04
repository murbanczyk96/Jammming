import React from "react";
import styles from "./Track.module.css";

function Track(props) {
    const buttonClickHandler = (event) => {
        if (props.addTrack) {
            props.addTrack(props.track);
        } else if (props.removeTrack) {
            props.removeTrack(props.track);
        }
    };

    const button = <button className={styles.button} onClick={buttonClickHandler}>{props.addTrack ? '+' : '-'}</button>
    return (
        <div className={styles.track}>
            <div>
                <h3>{props.track.name}</h3>
                <p>Artist: {props.track.artist} Album: {props.track.album}</p>
            </div>
            {button}
        </div>
    );
};

export default Track;