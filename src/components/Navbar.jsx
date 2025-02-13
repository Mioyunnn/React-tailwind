import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Content from './Content.jsx'
import { AnimatePresence } from "framer-motion";


function Navbar() {

    const [isContentVisible, setIsContentVisible] = useState(false);

    function handleContent() {
        setIsContentVisible((prev) => !prev);
    }
    
    return(
        
    <nav className="sticky w-full top-0 z-50">
        <div className="h-20 flex bg-food-darkgreen justify-between items-center sm:h-20vh"> 
            <div className="mx-12">
                {/*這邊是網頁名稱的動畫*/}
                <h1 className="text-4xl font-extrabold font-Caveat group relative overflow-hidden bg-transparent px-4 text-neutral-950">
                    <span className="relative inline-flex select-none">
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">R</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">e</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">s</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">t</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">a</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">u</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">r</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">a</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.18s] group-hover:[transform:rotateY(360deg)]">n</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.20s] group-hover:[transform:rotateY(360deg)]">t</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.22s] group-hover:[transform:rotateY(360deg)]">&nbsp;</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.24s] group-hover:[transform:rotateY(360deg)]">f</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.26s] group-hover:[transform:rotateY(360deg)]">i</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.28s] group-hover:[transform:rotateY(360deg)]">n</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.30s] group-hover:[transform:rotateY(360deg)]">d</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.32s] group-hover:[transform:rotateY(360deg)]">e</span>
                        <span className="font-extrabold font-Caveat duration-700 [transition-delay:0.34s] group-hover:[transform:rotateY(360deg)]">r</span>
                    </span>
                </h1>
            </div>
            <TiThMenu className="mx-8 text-3xl text-white cursor-pointer transition" onClick = {handleContent}/>
        </div>

            {/* AnimatePresence 需確保 Content 在狀態變更時執行 exit */}
        <AnimatePresence>
            {isContentVisible && (
                <Content onClose={() => setIsContentVisible(false)} />
            )}
        </AnimatePresence>
    </nav>
    )
}

export default Navbar
