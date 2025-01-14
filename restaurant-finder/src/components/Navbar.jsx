import React from "react";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
    return(
    <div>
        <nav className="h-10vh flex bg-food-yellow justify-between items-center">
            <div className="mx-12 text-4xl font-extrabold font-Caveat">Restaurant Finder</div>
            <TiThMenu className="mx-8 text-3xl"/>
        </nav>
    </div>
    )
}

export default Navbar