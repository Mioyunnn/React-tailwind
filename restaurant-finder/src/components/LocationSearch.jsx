import { FaSearch } from "react-icons/fa";

function LocationSearch() {
    return (
        <section className="flex my-16 justify-center items-center">
            <input type="text" placeholder="輸入您的目的地" className="mx-4 p-4 rounded-4xl border-4 border-solid border-food-yellow w-2/5" />
            <button className="bg-food-yellow mx-5 p-6 px-8 rounded-4xl">
                <FaSearch />
            </button>
        </section>
    )
}

export default LocationSearch