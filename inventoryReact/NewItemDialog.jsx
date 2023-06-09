import React, { useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

export default function NewItemDialog(props) {
  const [newDialog, setNewDialog] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [locationError, setLocationError]= useState(false);
  function toggleDialog() {
    setNewDialog(!newDialog);
    clearAll();
  }

  function changeQuantity(num) {
    if (quantity === 0 && num === -1) {
      return null;
    }
    setQuantity(parseInt(quantity) + parseInt(num));
  }

  function clearAll() {
    setName("");
    setDescription("");
    setQuantity(0);
    setLocation("");
    setNameError(false);
    setDescriptionError(false);
  }

  function addItems() {
    if (name.trim() === "") {
      setNameError(true);
      if (description.trim() === "") 
      {
        setDescriptionError(true);
        if(quantity === 0)
          setQuantityError(true);
        if(location.trim()==="")
          setLocationError(true);
        
      return;
    } else 
      return;
    }

    const newItem = {
      id: props.inventory.length + 1,
      name,
      description,
      quantity,
      location,
    };

    toggleDialog();
    props.setInventory([...props.inventory, newItem]);
    console.log("inventory array", newItem);
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        sx={props.buttonGridStyle}
        onClick={toggleDialog}
      >
        ADD
      </Button>
      <Dialog open={newDialog} onClose={toggleDialog}>
        <DialogContent>
          <TextField
            label="Name"
            sx={props.textFieldStyle}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError ? "Name is required" : ""}
            required
          />
          <TextField
            label="Description"
            sx={props.textFieldStyle}
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={descriptionError}
            helperText={descriptionError ? "Description is required" : ""}
            required
          />
          <TextField
            label="Quantity"
            sx={props.textFieldStyle}
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            error={quantityError}
            helperText={quantityError ? "The Quantity cannot be zero" : ""}
            required
            type='number'
          />
          <TextField
            label="Location"
            sx={props.textFieldStyle}
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            error={locationError}
            helperText={quantityError?"Please enter location": ""}
            required
          />
          <Grid sx={props.buttonGridStyle}>
            <IconButton
              onClick={() => {
                changeQuantity(-1);
              }}
              sx={props.iconStyle}
            >
              <RemoveIcon sx={props.iconStyle} />
            </IconButton>
            {quantity}
            <IconButton
              onClick={() => {
                changeQuantity(1);
              }}
              sx={props.iconStyle}
            >
              <AddIcon sx={props.iconStyle} />
            </IconButton>
          </Grid>
          <DialogActions>
            <Button onClick={toggleDialog}>Cancel</Button>
            <Button onClick={addItems}>Add</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
