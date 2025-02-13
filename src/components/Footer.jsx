import { FaGithub } from "react-icons/fa";

function Footer() {
    return(
        <>
            <div className="flex items-center justify-between bg-slate-200 ">
                <div className="m-4" >
                    <h3 className="text-2xl font-extrabold font-Caveat group relative overflow-hidden bg-transparent px-4 text-neutral-950">
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
                    </h3>
                </div>
                <div className="m-4 mr-16">
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-l">&copy; Mioyunnn </span>
                        <span className="text-sm md:text-l">Power by Foursquare & OpenStreetMap & Nominatim</span>
                    </div>
                </div>
                <div className="m-4">
                    <a href="https://github.com/Mioyunnn">
                        <FaGithub className="cursor-pointer hover:scale-125 hover:rotate-360 transition text-3xl"/>
                    </a>
                </div>
            </div>
        </>
    )
}


export default Footer