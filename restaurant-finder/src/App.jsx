import React from 'react'
import Navbar from './components/Navbar.jsx'
import LocationSearch from './components/LocationSearch.jsx'
import Condition from './components/Condition.jsx'
import RestaurantList from './components/Restaurant-list.jsx'

function App() {
    return(
        <>
            <Navbar />
            <LocationSearch />
            <Condition />
            <RestaurantList />
        </>
    )
}

export default App
