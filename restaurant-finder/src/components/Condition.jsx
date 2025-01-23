import { FaFilter } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function Condition() {
    return (
        <div className="items-center justify-around p-6 hidden sm:flex">
            <div className="flex-[1] basis-1/10 mx-2 flex mb-2 border-r-food-green border-solid border-r-4 justify-center items-center">
                <div className="bg-food-green p-4 px-8 mx-4 rounded-4xl flex justify-center items-center cursor-pointer">
                    <FaFilter className="text-2xl text-white" />
                </div>
            </div>
            <div className="flex-[9] basis-9/10 mx-4 flex justify-around whitespace-nowrap overflow-x-auto pb-2 scrollbar-custom">
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>早餐</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>日式料理</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>韓式料理</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>泰式料理</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>甜點</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>甜點</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>甜點</button>
                </div>
                <div className="mx-4">
                    <button className="text-xl bg-food-green p-4 px-8 w-full h-full rounded-4xl flex items-center text-white"><FaCheck className="mr-4 text-white"/>甜點</button>
                </div>
            </div>
        </div>
    )
}

export default Condition