import { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const CotizacionForm = () => {
  const [cotizaciones, setCotizaciones] = useState([{ amount: '', description: '', unitPrice: '', totalPrice: '' }]);

  const handleAddRow = () => {
    setCotizaciones([...cotizaciones, { amount: '', description: '', unitPrice: '', totalPrice: '' }]);
  };

  const handleRemoveRow = (index) => {
    const updatedCotizaciones = [...cotizaciones];
    updatedCotizaciones.splice(index, 1);
    setCotizaciones(updatedCotizaciones);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCotizaciones = [...cotizaciones];
    updatedCotizaciones[index][name] = value;
    setCotizaciones(updatedCotizaciones);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cantidad</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio Unitario</TableCell>
              <TableCell>Precio Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cotizaciones.map((cotizacion, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    name="amount"
                    value={cotizacion.amount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="description"
                    value={cotizacion.description}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="unitPrice"
                    value={cotizacion.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="totalPrice"
                    value={cotizacion.totalPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRemoveRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleAddRow}>
        Add row
      </Button>
    </>
  );
};