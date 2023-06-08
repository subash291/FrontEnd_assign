import React, { useState } from "react";
import {Grid,Button,Dialog,DialogContent,DialogActions,TextField, IconButton} from "@mui/material";
import { Add as AddIcon,Remove as RemoveIcon} from "@mui/icons-material";

export default function NewItemDialog(props){
    const[newDialog , setNewDialog]= useState(false)
    const[name,setName] =useState("")
    const[quantity,setQuantity] =useState(0)
    const[description,setDescription] =useState("")
    const[location,setLocation] =useState("")
    

    function NewtoggleDialog()
    {
        setNewDialog(!newDialog)
        clearAll();
    }
    function changeQuantity(num){
        if (quantity ===0 && num ===-1){
            return null;
        }
        setQuantity(quantity+num);
    }
    function clearAll(){
        setName("")
        setDescription("")
        setQuantity(0)
        setLocation("")
    }
    function addItems(){
        let array =[]
        array.push({id: props.inventory.length+1,
            name,description,quantity,location})
        NewtoggleDialog();
        props.setInventory ([...props.inventory, ...array]);
        console.log("inventory array", array);

    }
    return (
    <Grid
        Container
        direction="column"
        justyContent=""
        alignItem=""
    >
    <Button 
    variant="container" 
    sx={props.buttonGridStyle}
    onClick={NewtoggleDialog}
    >
    ADD 
    </Button>
    <Dialog open={newDialog}onClose={NewtoggleDialog}>
        <DialogContent>
<TextField
 label="Name" 
 sx={props.textFieldStyle} 
 variant="outlined"
  value={name} 
  onChange={(e)=> setName(e.target.value)}>
     
  </TextField>
  <TextField
 label="Description" 
 sx={props.textFieldStyle} 
 variant="outlined"
  value={description} 
  onChange={(e)=> setDescription(e.target.value)}>
     
  </TextField>
  <TextField
 label="quantity" 
 sx={props.textFieldStyle} 
 variant="outlined"
  value={quantity} 
  onChange={(e)=> setQuantity(e.target.value)}>
     
  </TextField>
  <TextField
 label="location"  
 sx={props.textFieldStyle} 
 variant="outlined"
  value={location} 
  onChange={(e)=> setLocation(e.target.value)}>
     
  </TextField>
  <Grid sx={props.buttonGridStyle}>
    <IconButton onClick={()=>{changeQuantity(-1)}} sx={props.iconStyle}>
        <RemoveIcon sx={props.iconStyle}/>
        </IconButton>
        {quantity}
        <IconButton onClick={()=>{changeQuantity(1)}} sx={props.iconStyle}>
        <AddIcon  sx={props.iconStyle}/>
        </IconButton>
</Grid>
<DialogActions>
    <Button onClick={NewtoggleDialog}> Cancel</Button>
    <Button onClick={addItems}>Add</Button>
</DialogActions>
        </DialogContent>
        </Dialog>
    </Grid>
    );
}