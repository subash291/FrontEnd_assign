import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteForever";

export default function InventoryTable(props) {
  const tableCellStyle = {
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      {props.inventory.length > 0 && (
        <TableContainer sx={props.tableStyle} component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#ffc107" }}>
              <TableRow>
                <TableCell sx={tableCellStyle} align="right">
                  Name
                </TableCell>
                <TableCell sx={tableCellStyle} align="right">
                  Quantity
                </TableCell>
                <TableCell sx={tableCellStyle} align="right">
                  Location
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.inventory.map((row) => (
                <TableRow hover key={row.name}>
                  <TableCell
                    onClick={() => {
                      props.viewItem(row.id);
                    }}
                    align="right"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      props.viewItem(row.id);
                    }}
                    align="right"
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      props.viewItem(row.id);
                    }}
                    align="right"
                  >
                    {row.location}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        props.editItem(row.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        props.deleteItem(row.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
