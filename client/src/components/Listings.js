import React from 'react'
import ListingCard from './ListingCard'
import {Link} from 'react-router-dom'


function Listings({user, listings, setListings, setDOMUpdater}) {
    
   
    return (
        <>
        <Link to="add-item">{user.username ? <button id="add-button">Add item for sale</button> : null}</Link>
        <div id="card-container">
            {listings.map((listing) => {
                return <ListingCard setDOMUpdater={setDOMUpdater} images={listing.images.map(image => image.url)} user={user} listings={listings} setListings={setListings} listing={listing}/>
            })}
        </div>
        </>
    )
}

export default Listings;
