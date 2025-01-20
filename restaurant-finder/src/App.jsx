import React from 'react'
import Navbar from './components/Navbar.jsx'
import LocationSearch from './components/LocationSearch.jsx'
import Condition from './components/Condition.jsx'
import RestaurantList from './components/Restaurant-list.jsx'
import Map from './components/Map.jsx'

function App() {
    return(
        <>
            <Navbar />
            <Map />
            <Condition />
            <RestaurantList />
        </>
    )
}

export default App
