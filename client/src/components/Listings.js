import React from 'react'
import {useState, useEffect} from 'react'
import ListingCard from './ListingCard'

function Listings({user, listings}) {
    
   
    return (
        <div id="card-container">
            {listings.map((listing) => {
                return <ListingCard images={listing.images.map(image => image.url)} user={user} listing={listing}/>
            })}
        </div>
    )
}

export default Listings;
