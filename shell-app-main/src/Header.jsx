import React from "react";

export default function Header({notes}) {
    return (
        <div className="header">
            <h1>The Jankiest TODO App Ever</h1>
            <p>{" - (" + notes.length + ")"}</p>
        </div>
    );
}