import { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const CotizacionForm = () => {
  const [cotizaciones, setCotizaciones] = useState([{ cantidad: '', descripcion: '', precioUnitario: '', precioTotal: '' }]);

  const handleAddRow = () => {
    setCotizaciones([...cotizaciones, { cantidad: '', descripcion: '', precioUnitario: '', precioTotal: '' }]);
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
    <div>
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
                    name="cantidad"
                    value={cotizacion.cantidad}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="descripcion"
                    value={cotizacion.descripcion}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="precioUnitario"
                    value={cotizacion.precioUnitario}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="precioTotal"
                    value={cotizacion.precioTotal}
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
        Agregar Fila
      </Button>
    </div>
  );
};