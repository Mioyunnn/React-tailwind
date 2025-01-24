import React, { useState }from "react";
import { FaSearch } from "react-icons/fa";
import RestaurantList from "./Restaurant-list";
import Condition from "./Condition";

function LocationSearch() {

    const [address, setAddress] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
        const url = `https://api.foursquare.com/v3/places/search?ll=${lat},${lng}`;

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
            return data.results.map((place) => ({
                name: place.name,
                address: place.location.address || "未知地址",
                distance: place.distance ? (place.distance / 1000).toFixed(2) + " 公里" : "未知距離",
                category: place.categories[0]?.name || "未知類別",
                open: place.closed_bucket
            }));
            
        } else {
            throw new Error("找不到附近的餐廳 !");
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
    return (
        <div>
            <header className="flex flex-col items-center m-0 sm:m-12">
                <h1 className="hidden m-10 md:text-6xl sm:block text-5xl text-nowrap">讓我們幫您尋找餐廳。</h1>
                <div className="m-10 flex justify-center w-full">
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="輸入您的目的地..." className="h-20 mx-4 p-4 rounded-4xl border-4 border-solid border-food-slightgreen w-4/5 max-w-2xl outline-none"/>
                    <button className="bg-food-slightgreen hover:bg-food-green transition mx-5 p-6 px-8 rounded-4xl" onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>
            </header>
            <Condition />
            <RestaurantList restaurants={results} />
        </div>
    )
}

export default LocationSearch