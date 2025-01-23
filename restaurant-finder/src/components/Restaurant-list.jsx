import { TbGpsFilled } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

function RestaurantList() {
    return(
        <main className="p-6 sm:p-12">
            <div className="bg-food-bitgreen rounded-2xl h-screen shadow-card ">
                <div className="p-4 h-screen overflow-y-auto">
                    <div className="flex mt-4 justify-between shadow-card rounded-2xl p-3">
                        <img className="mx-6 px-6 border-l-4 border-solid border-food-slightgreen hidden sm:block" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png" alt="restaurant-pic" />
                        <div className="flex w-full">
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="mb-2">
                                        <h2 className="text-3xl w-full mx-1">弘爺漢堡</h2>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="justify-between mb-2 items-center">
                                                <span className="px-1 mx-1">4.9 顆星</span>
                                                <span className="px-1 mx-1">1000 評論</span>
                                                <span className="px-1 mx-1 text-green-600">營業中</span>
                                            </div>
                                            <div>
                                                <span className="px-1 mx-1">早餐</span>
                                                <span className="px-1 mx-1">0$-200$</span>
                                                <span className="px-1 mx-1">Menu</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col items-center">
                                                <span className="m-1">10.0 公里</span>
                                                <span className="m-1 flex items-center justify-between">
                                                    <TbGpsFilled className="mr-1"/>
                                                    內壢區
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button className="m-2 px-6 py-3 rounded-3xl bg-food-green hover:bg-food-slightgreen hover:scale-110 transition flex items-center">
                                        <FaBookmark className="mr-2"/>
                                        收藏
                                    </button>
                                    <button className="m-2 px-6 py-3 rounded-3xl bg-food-green hover:bg-food-slightgreen hover:scale-110 transition flex items-center">
                                        <FaShare className="mr-2"/>
                                        分享
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="flex mt-4 justify-between shadow-card rounded-2xl p-3">
                        <img className="mx-6 px-6 border-l-4 border-solid border-food-slightgreen hidden sm:block" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png" alt="restaurant-pic" />
                        <div className="flex w-full">
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="mb-2">
                                        <h2 className="text-3xl w-full mx-1">弘爺漢堡</h2>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="justify-between mb-2 items-center">
                                                <span className="px-1 mx-1">4.9 顆星</span>
                                                <span className="px-1 mx-1">1000 評論</span>
                                                <span className="px-1 mx-1 text-green-600">營業中</span>
                                            </div>
                                            <div>
                                                <span className="px-1 mx-1">早餐</span>
                                                <span className="px-1 mx-1">0$-200$</span>
                                                <span className="px-1 mx-1">Menu</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col items-center">
                                                <span className="m-1">10.0 公里</span>
                                                <span className="m-1 flex items-center justify-between">
                                                    <TbGpsFilled className="mr-1"/>
                                                    內壢區
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button className="m-2 px-6 py-3 rounded-3xl bg-food-green hover:bg-food-slightgreen hover:scale-110 transition flex items-center">
                                        <FaBookmark className="mr-2"/>
                                        收藏
                                    </button>
                                    <button className="m-2 px-6 py-3 rounded-3xl bg-food-green hover:bg-food-slightgreen hover:scale-110 transition flex items-center">
                                        <FaShare className="mr-2"/>
                                        分享
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RestaurantList