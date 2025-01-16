import React from "react";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
    return(
    <nav className="sticky w-full top-0 z-50">
        <div className="h-10vh flex bg-food-yellow justify-between items-center">
            <div className="mx-12">
                <h1 className="text-4xl font-extrabold font-Caveat">Restaurant Finder</h1>
            </div>
            <TiThMenu className="mx-8 text-3xl"/>
        </div>
    </nav>
    )
}

export default Navbar