import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link , useNavigate} from "react-router-dom";
import {useState} from 'react'
import EditItem from "./EditItem";

function ListingCard({ setListings, listings, listing, user, images, setDOMUpdater }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false)
console.log(listing)
console.log(listings)
  function handleEditClick() {
    setClicked(!clicked)
  }
  
  function handleDeleteItem(deletedListing) {
      setListings((listings) =>
        listings.filter((listing) => listing.id !== deletedListing.id)
      );
    }

  function handleDeleteClick () {
    fetch(`/items/${listing.id}`, {
        method: "Delete"
    })
    .then(res => {
        if (res.ok) {
            handleDeleteItem(listing)
        }
    })
}

  return (
    <>
    {clicked ? <EditItem setDOMUpdater={setDOMUpdater} setClicked={setClicked} setListings={setListings} listings={listings} listing={listing}/> : null}
    <Card id="listing-card" sx={{ maxWidth: 345 }}>
      <Link to="selected-item">
        <CardMedia
          component="img"
          height="140"
          image={images}
          alt="no pictures added"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {listing.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price: ${listing.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {listing.description}
        </Typography>
      </CardContent>
      {user.id === listing.seller.id ? (
        <CardActions>
          <Button onClick={handleEditClick} size="small">edit</Button>
        </CardActions> 
      ) : null}
      {user.id === listing.seller.id ? (
        <CardActions>
          <Button onClick={handleDeleteClick} size="small">delete</Button>
        </CardActions> 
      ) : null}
    </Card>
    </>
  );
}

export default ListingCard;
