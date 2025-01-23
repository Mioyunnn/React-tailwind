import React from "react";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
    return(
    <nav className="sticky w-full top-0 z-50">
        <div className="h-20 flex bg-food-darkgreen justify-between items-center sm:h-10vh">
            <div className="mx-12">
                <h1 className="text-4xl font-extrabold font-Caveat text-white">Restaurant Finder</h1>
            </div>
            <TiThMenu className="mx-8 text-3xl text-white cursor-pointer"/>
        </div>
    </nav>
    )
}

export default Navbar