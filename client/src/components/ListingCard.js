import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


function ListingCard({listing, user, images}) {
  return (
    
    <Card id="listing-card" sx={{ maxWidth: 345 }}>
     <Link to='selected-item' >
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
     { user.username ? <CardActions>
   <Button size="small">Send offer for purchase</Button>
      </CardActions> : null}
   </Card>
  )
}

export default ListingCard;