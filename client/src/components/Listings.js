import React from 'react'
import {useState, useEffect} from 'react'
import ListingCard from './ListingCard'

function Listings({user}) {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch("/items")
        .then(response => response.json())
        .then((data) => setListings(data))
    }, [])

    return (
        <div>
            {listings.map((listing) => {
                return <ListingCard user={user} listing={listing}/>
            })}
        </div>
    )
}

export default Listings;
