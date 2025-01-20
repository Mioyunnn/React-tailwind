import React, { useState , useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet 樣式
import LocationSearch from "./LocationSearch";

const ChangeMapCenter = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [center, setCenter] = useState([25.033, 121.5654]);

  async function handleSearch(searchQuery) {
    try {
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`;
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      console.log("Geocoding response:", data);

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCenter([parseFloat(lat), parseFloat(lon)]);
        fetchOverpassData(lat, lon);
      } else {
        alert("找不到該地址，請嘗試其他地址。");
      }
    } catch (error) {
      console.error("Error during geocoding:", error);
    }
  }
  useEffect(() => {
    // Overpass API 請求
    const fetchOverpassData = async ( lat, lon ) => {
      const query = `
        [out:json];
        node["amenity"="restaurant"](${lat - 0.02},${lon - 0.02},${lat + 0.02},${lon + 0.02});
        out;
      `;
      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

      const response = await fetch(url);
      const data = await response.json();

      // 處理資料
      const parsedLocations = data.elements.map((el) => ({
        lat: el.lat,
        lon: el.lon,
        name: el.tags?.name || "無名稱",
      }));
      setLocations(parsedLocations);
    };
    if (center) {
        fetchOverpassData(center[0], center[1]);  // 當地圖中心變更時，抓取餐廳資料
      }
    }, [center]);

  return (
    <div className="p-12">
      <LocationSearch onSearch={handleSearch} />
      <div className="h-80 w-full">
        <MapContainer center={center} zoom={18} className="h-80 rounded-2xl z-0">
          <ChangeMapCenter center={center} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((loc, index) => (
            <Marker key={index} position={[loc.lat, loc.lon]}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
