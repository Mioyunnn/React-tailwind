import { FaFilter } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function Condition() {
    return (
        <div className="items-center justify-around flex">
            <div className="flex-[1] basis-1/10 mx-2 flex border-r-food-red border-solid border-r-4 justify-center items-center">
                <div className="bg-food-red p-4 px-8 mx-4 rounded-4xl flex justify-center items-center cursor-pointer">
                    <FaFilter className="text-2xl" />
                </div>
            </div>
            <div className="flex-[9] basis-9/10 mx-4 flex justify-around whitespace-nowrap overflow-x-auto outline-none">
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>早餐</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>日式料理</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>韓式料理</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>泰式料理</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>甜點</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>甜點</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>甜點</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-red p-4 px-8 w-full h-full rounded-4xl flex items-center"><FaCheck className="mr-4"/>甜點</button>
                </div>
            </div>
        </div>
    )
}

export default Condition