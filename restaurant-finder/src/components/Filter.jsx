import { FaFilter } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function Filter({ restaurants }) {
    return (
        <div className="items-center justify-around p-6 hidden sm:flex">
            <div className="flex-[1] basis-1/10 mx-2 flex mb-2 border-r-food-green border-solid border-r-4 justify-center items-center">
                <div className="bg-food-green p-4 px-8 mx-4 rounded-4xl flex justify-center items-center cursor-pointer">
                    <FaFilter className="text-2xl text-white" />
                </div>
            </div>
            <div className="flex-[9] basis-9/10 mx-4 flex justify-around whitespace-nowrap overflow-x-auto pb-2 scrollbar-custom">
                {restaurants.length === 0 ? ("") : 
                (
                    restaurants.map((restaurant, index) => (
                        <div key={index} className="mx-4">
                          <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>{restaurant.category}</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Filter