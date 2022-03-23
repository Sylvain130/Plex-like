import React, { } from "react";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";

const Topbar = (): JSX.Element => {
    return (
        <>
            <img className= "logo" src="plex-logo.png"/>
            <Navigation />
            <Searchbar />
        </>
    )
}

export default Topbar