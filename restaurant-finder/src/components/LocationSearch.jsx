import { FaSearch } from "react-icons/fa";

function LocationSearch() {
    return (
        <header className="flex flex-col items-center m-12">
            <h1 className="text-7xl m-10">讓我們幫您尋找餐廳。</h1>
            <div className="m-10 flex justify-center w-full">
                <input type="text" placeholder="輸入您的目的地..." className="mx-4 p-4 rounded-4xl border-4 border-solid border-food-yellow w-2/5" />
                <button className="bg-food-yellow mx-5 p-6 px-8 rounded-4xl">
                    <FaSearch />
                </button>
            </div>
        </header>
    )
}

export default LocationSearch