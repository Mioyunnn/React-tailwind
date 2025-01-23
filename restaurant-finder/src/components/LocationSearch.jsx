import React, { useState }from "react";
import { FaSearch } from "react-icons/fa";

function LocationSearch() {

    const [address, setAddress] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function geocodeAddress(address) {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return console.log(response.json())
        } else {
            throw new error("無法取得地址的經緯度!");
        }
    }

    async function searchRestaurants(lat, lng) {
        const foursquareApiKey = "fsq3C1N6oIuSBS60e5BMvsJMWglGBBL8B3mfowhrzJB8CNY=";
        const url = `https://api.foursquare.com/v3/places/search?ll=${lat},${lng}&categories=13065&limit=10`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": foursquareApiKey
            }
        });

        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results.map(place => ({
                name: place.name,
                address: place.location.formatted_address || "未知地址",
                distance: place.distance || "未知距離",
                category: place.categories[0]?.name || "未知類別"
            }));
        } else {
            throw new error("找不到附近的餐廳 !")
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
        <header className="flex flex-col items-center m-0 sm:m-12">
            <h1 className="hidden m-10 md:text-6xl sm:block text-5xl text-nowrap">讓我們幫您尋找餐廳。</h1>
            <div className="m-10 flex justify-center w-full">
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="輸入您的目的地..." className="h-20 mx-4 p-4 rounded-4xl border-4 border-solid border-food-slightgreen w-4/5 max-w-2xl outline-none"/>
                <button className="bg-food-slightgreen hover:bg-food-green transition mx-5 p-6 px-8 rounded-4xl" onClick={handleSearch}>
                    <FaSearch />
                </button>
            </div>
        </header>
    )
}

export default LocationSearch