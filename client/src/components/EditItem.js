import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function EditItem({ listings, setClicked, setDOMUpdater, setListings, listing }) {
  const [formState, setFormState] = useState(listing);
  console.log(listing);

  // function hideFormClick() {
  //   setClicked(!clicked);
  // }

  function handleUpdatedItem(updatedItem) {
    setListings((listing) => [...listing, updatedItem]);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`/items/${listing.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ...formState,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((updatedItem) => {
          console.log(formState);
          handleUpdatedItem(updatedItem);
          setClicked(false)
        });
      }
    })
    .then(setDOMUpdater(Math.random()));
  }

  function handleChange(e) {
    setFormState({ ...listing, [e.target.name]: e.target.value });
  }

 
    return (
      <div>
        <Box
          id="add-item-form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          onSubmit={handleEditSubmit}
          noValidate
          autoComplete="off"
        >
          Enter item info:
          <TextField
            id="filled-basic"
            label="name"
            name="name"
            required
            value={formState.name}
            variant="filled"
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            label="description"
            name="description"
            required
            value={formState.description}
            variant="filled"
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            label="price"
            name="price"
            required
            value={formState.price}
            variant="filled"
            onChange={handleChange}
          />
          <button type="submit">done</button>
          {/* <button onClick={hideFormClick}>hide form</button> */}
        </Box>
      </div>
    );
  
}

export default EditItem;
