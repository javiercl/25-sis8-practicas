
import React from "react";
import './display.css';

function Display(props) {

    return (
        <div className="display">{props.vals.resultado}</div>
    );
}

export default Display;
