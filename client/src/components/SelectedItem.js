import React from 'react'

function SelectedItem({listings, user}) {
    // console.log(listings)
    // const selectedListing = listings.filter((listing) => {
    //     return listing.includes(user.id)
    // })
    // console.log(selectedListing)
    return (
        <div>
            {user.id}
        </div>
    )
}
// function handleSearch(e) {
//     const searchData = users.filter((user) => {
//       return user.username.toLowerCase().includes(e.target.value.toLowerCase());
//     });
//     setSearchedData(searchData);
//   }
export default SelectedItem;
