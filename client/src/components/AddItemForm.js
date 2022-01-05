import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
// possible to have one form for all three tables below
function AddItemForm({ user, listings }) {
    const [imagesData, setImagesData] = useState([])
    const [itemsData, setItemsData] = useState([])
    const [postedItemID, setPostedItemID] = useState('')

    useEffect(() => {
        fetch("/images")
       .then(response => response.json())
       .then((data) => setImagesData(data))
   }, [])
 
  function handleNewImage (newImage) {
    setImagesData((image) => [...image, newImage])
  }

  function handleNewItem(newItem) {
    setItemsData(listings)
    setImagesData((item) => [...item, newItem])
  }

  const initialItemInfoState = {
    name: "",
    colour: "",
    description: "",
    price: "",
  };

  const intialImageState = {
      name: "",
      url: ""
  }

  const [newItemInfo, setNewItemInfo] = useState(initialItemInfoState);

  const [newImage, setNewImage] = useState(intialImageState);

  function handleItemInfoChange(e) {
    setNewItemInfo({ ...newItemInfo, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    setNewImage({ ...newImage, [e.target.name]: e.target.value });
  }

  function handleItemSubmit(e) {
    e.preventDefault();
    fetch("/items", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
          ...newItemInfo
      })
    })
    .then(res => {
        if (res.ok) {
            res.json().then((newItem) => {
        setNewItemInfo(initialItemInfoState)
        handleNewItem(newItem)
        setPostedItemID(newItem.id)
            })
        } 
    })
  }

  function handleImageSubmit(e) {
    e.preventDefault()
    
    fetch("/images", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: newImage.name,
            url: newImage.url,
            item_id: postedItemID
        })
    })
    .then(res => {
        if (res.ok) {
            res.json().then((newImage) => {
        handleNewImage(newImage)
        setNewImage(intialImageState)
            })
        }
    })
  }
 
  return (
    <>
      <h2 id="add-item-header"> Add new item for sale</h2>
      <Box
        onSubmit={handleItemSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
          Step 1:
        <TextField
          id="filled-basic"
          label="name"
          name="name"
          value={newItemInfo.name}
          variant="filled"
          onChange={handleItemInfoChange}
        />
        {/* <TextField
          id="filled-basic"
          label="colour"
          name="colour"
          value={newItemInfo.colour}
          variant="filled"
          onChange={handleItemInfoChange}
        /> */}
        <TextField
          id="filled-basic"
          label="description"
          name="description"
          value={newItemInfo.description}
          variant="filled"
          onChange={handleItemInfoChange}
        />
        <TextField
          id="filled-basic"
          label="price"
          name="price"
          value={newItemInfo.price}
          variant="filled"
          onChange={handleItemInfoChange}
        />
        <button type="submit">submit item info</button>
      </Box>

      <Box
        onSubmit={handleImageSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
          Step 2:
        <TextField
          id="filled-basic"
          label="picture url"
          name="url"
          value={newImage.url}
          variant="filled"
          onChange={handleImageChange}
        />
        <TextField
          id="filled-basic"
          label="image name"
          name="name"
          value={newImage.name}
          variant="filled"
          onChange={handleImageChange}
        />
        <button type="submit">submit image for item</button>
      </Box>
    </>
  );
}

export default AddItemForm;
