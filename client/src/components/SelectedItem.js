import React from 'react'

function SelectedItem({listings, user}) {
    console.log(listings)
    console.log(user.sold_items)
    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    )
}

export default SelectedItem;
