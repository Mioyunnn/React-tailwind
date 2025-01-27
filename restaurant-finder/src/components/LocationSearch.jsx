import React, { useState }from "react";
import { FaSearch } from "react-icons/fa";
import RestaurantList from "./Restaurant-list";
import Condition from "./Condition";

function LocationSearch() {

    const [address, setAddress] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [radius, setRadius] = useState(1000); // 預設搜尋半徑：1 公里
    const [limit, setLimit] = useState(10); // 預設搜尋店家: 20 間


    async function geocodeAddress(address) {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
            }
        } else {
            throw new Error("無法取得地址的經緯度!");
        }
    }

    async function searchRestaurants(lat, lng) {
        const foursquareApiKey = "fsq3B6qYKQh/cDZFku+oYJyYFgy1orTaq57lHyBLMn/o8pI=";
        const url = `https://api.foursquare.com/v3/places/search?ll=${lat},${lng}&categories=13065&radius=${radius}&limit=${limit}&sort=DISTANCE`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": foursquareApiKey,
            },
        });
        console.log("Latitude:", lat, "Longitude:", lng);
        console.log("Foursquare URL:", url);

        if(!response.ok) {
            throw new Error(`Foursquare API 錯誤: ${response.status}`);
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
            console.log("Response data:", data);
            // 定義要排除的類別清單
            const excludeCategories = 
            ["Park", "Night Club",
             "Snack Place", "Night Market", 
             "Department Store", "Grocery Store", 
             "Baseball Stadium", "Agriculture and Forestry Service",
             "Convenience Store", "Temple",
             "Bookstore", "Concert Hall",
             "Indie Movie Theater", "Theater",
             "Food and Beverage Retail", "Monument",
             "Shopping Mall", "Clothing Store",
             "Landmarks and Outdoors", "Furniture and Home Store",
             "Opera House", "Retail",
             "Arts and Entertainment", "Garden",
             "Hiking Trail", "Hot Spring",
             "Distillery", "Museum",
             "Art Museum", "Pool Hall",
             "Movie Theater", "Outlet Store",
             "Garden Center", "Amusement Park",
             "Healthcare Clinic", "History Museum",
             "Plaza", "Confucian Temple",
             "Art Gallery", "Farm",
             "Public Art", "Middle School",
             "Preschool", "Historic and Protected Site",
             "Flea Market", "Campground",
             "Pet Supplies Store", "Hotel", 
             "Buddhist Temple", "Lounge"]; // 不想顯示的類別
            return data.results

            .filter((place) => {
                const category = place.categories[0]?.name || "未知類別";
                // 如果類別名稱不在排除清單中，保留該項目
                return !excludeCategories.includes(category);
            })
            
            .map((place) => {

                const originalCategory = place.categories[0]?.name || "未知類別";

                // 自訂名稱對應表
                const customCategories = {
                    "Café": "咖啡廳",
                    "Bed and Breakfast": "住宿與早餐",
                    "Coffee Shop": "咖啡廳",
                    "Restaurant": "餐廳",
                    "Bar": "酒吧",
                    "Taiwanese Restaurant": "臺灣菜",
                    "Chinese Restaurant": "中式餐點",
                    "American Restaurant": "美式餐點",
                    "Japanese Restaurant": "日式餐點",
                    "Italian Restaurant": "義式餐點",
                    "Thai Restaurant": "泰式餐點",
                    "French Restaurant": "法式餐點",
                    "Korean Restaurant": "韓式餐點",
                    "Malay Restaurant": "馬來西亞餐點",
                    "Beijing Restaurant": "北京餐廳",
                    "Sushi Restaurant": "壽司店",
                    "Mexican Restaurant": "墨西哥餐廳",
                    "Vietnamese Restaurant": "越式餐點",
                    "Seafood Restaurant": "海鮮餐點",
                    "Bistro": "酒館",
                    "Udon Restaurant": "拉麵店",
                    "Buffet": "自助餐",
                    "Tea Room": "茶室",
                    "Pizzeria": "披薩店",
                    "Asian Restaurant": "亞州料理",
                    "Chinese Breakfast Restaurant": "中式早餐",
                    "Fast Food Restaurant": "速食店",
                    "Cafe, Coffee, and Tea House": "咖啡廳、咖啡、茶店",
                    "Diner": "晚餐",
                    "Hotpot Restaurant": "火鍋店",
                    "Noodle Restaurant": "麵店",
                    "Juice Bar": "飲料店",
                    "Candy Store": "甜食店",
                    "Dessert Shop": "甜點店",
                    "Bakery": "烘焙坊",
                    "Deli": "小吃",
                    "Burger Joint": "美式漢堡連鎖",
                    "Fried Chicken Joint": "炸雞連鎖",
                    "BBQ Joint": "烤肉連鎖",
                    "Peking Duck Restaurant": "北京烤鴨餐廳",
                    "Ice Cream Parlor": "冰淇淋店",
                    "Dumpling Restaurant": "水餃店",
                    "Vegan and Vegetarian Restaurant": "素食店",
                    "Hotel Bar": "飯店酒吧",
                    "Food Court": "美食廣場",
                    "Dim Sum Restaurant": "港式餐點",
                    "Hakka Restaurant": "客家餐點",
                    "Gastropub": "美食酒吧",
                    "Breakfast Spot": "早餐",
                    "English Restaurant": "複合式餐點",
            };

            // 如果有對應的自訂名稱，則替換；否則保留原名稱
            const customCategory = customCategories[originalCategory] || originalCategory;

            return {
                name: place.name,
                address: place.location.address || "未知地址",
                distance: place.distance ? (place.distance / 1000).toFixed(2) + " 公里" : "未知距離",
                category: customCategory,
                open: place.closed_bucket
            };
            });
        } else {
            throw new Error("找不到附近的餐廳!");
        }
    }
    async function handleSearch() {

        setLoading(true);
        setError("");
        setResults([]);

        try{
            const {lat, lng} = await geocodeAddress(address);
            const restaurants = await searchRestaurants(lat, lng);
            setResults(restaurants);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    function increaseStore() {
        setRadius((prevRadius) => prevRadius + 1000);
        setLimit((prevLimit) => prevLimit + 10);
        setResults([]); // 清空結果，避免重複資料顯示
        handleSearch(); // 重新執行搜尋
    }


    return (
        <div>
            <header className="flex flex-col items-center m-0 sm:m-12">
                <h1 className="hidden m-10 md:text-6xl sm:block text-5xl text-nowrap">讓我們幫您尋找餐廳。</h1>
                <div className="m-10 flex justify-center w-full">
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="輸入您的目的地..." className="h-20 mx-4 p-4 rounded-4xl border-4 border-solid border-food-slightgreen w-4/5 max-w-2xl text-2xl outline-none"/>
                    <button className="bg-food-slightgreen hover:bg-food-green transition mx-5 p-6 px-8 rounded-4xl" onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>
            </header>
            <Condition />
            <RestaurantList restaurants={results} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white transition px-6 py-3 rounded-xl"
                onClick={increaseStore}>
            </button>
        </div>
    )
}

export default LocationSearch