import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import NewItemDialog from "./component/NewItemDialog.jsx";
import InventoryTable from "./InventoryTable.jsx";
import ExistingItemDialog from "./component/ExistingItemDialog.jsx";

const theme = createTheme();

const buttonGridStyle = {
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
};
const textFieldStyle = {
  marginTop: theme.spacing(2),
  minWidth: "60%",
};
const iconStyle = {
  marginTop: theme.spacing(0.25),
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
};
const tableStyle = {
  marginTop: theme.spacing(2),
  width: "75%",
};

export default function App() {
  const [inventory, setInventory] = useState([]);
  const [selectedItem, setItem] = useState([]);
  const [dialogExisting, setDialogExisting] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    console.log("inventory state", inventory);
  }, [inventory]);
  useEffect(() => {
    console.log("selectedItem state", selectedItem);
  }, [selectedItem]);

  function deleteItem(id) {
    setInventory(inventory.filter((item) => item.id !== id));
  }
  function editItem(id) {
    setReadOnly(false);
    setItem(inventory.filter((item) => item.id === id));
    setDialogExisting(true);
  }
  function viewItem(id) {
    setReadOnly(true);
    setItem(inventory.filter((item) => item.id === id));
    setDialogExisting(true);
  }

  function updateItem(id) {
    let existingData = inventory.filter((item) => item.id !== id);
    setInventory([...existingData, ...selectedItem]);
    setDialogExisting(false);
  }
  function toggleDialogExisting() {
    setDialogExisting(false);
    setItem([]);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <NewItemDialog
          textFieldStyle={textFieldStyle}
          iconStyle={iconStyle}
          buttonGridStyle={buttonGridStyle}
          inventory={inventory}
          setInventory={setInventory}
        />
        <ExistingItemDialog
          dialogExisting={dialogExisting}
          selectedItem={selectedItem}
          textFieldStyle={textFieldStyle}
          buttonGridStyle={buttonGridStyle}
          toggleDialogExisting={toggleDialogExisting}
          setItem={setItem}
          readOnly={readOnly}
          updateItem={updateItem}
        />

        <InventoryTable
          tableStyle={tableStyle}
          inventory={inventory}
          deleteItem={deleteItem}
          editItem={editItem}
          viewItem={viewItem}
        />
      </Grid>
    </ThemeProvider>
  );
}
