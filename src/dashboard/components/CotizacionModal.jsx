import Modal from 'react-modal';
import { CotizacionForm } from './';
import { Box, FormControl, FormHelperText, FormLabel, Grid, Input } from '@mui/material';

const customStyles = {
  overlay: {
    zIndex: 9999,
  },
  content: {
    top: "8%",
    left: "5%",
    right: "5%",
    bottom: "8%",
    // marginRight: "-45%",
    // transform: "translate(-50%, -50%)",
    zIndex: 10000,

    // position: 'absolute',
    // top: '40px',
    // left: '40px',
    // right: '40px',
    // bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    // WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    // outline: 'none',
    // padding: '20px'
  },
};

Modal.setAppElement("#root");

export const CotizacionModal = ({ isModalOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <h1>Nueva Cotización</h1>
          {/* <hr /> */}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 6
            // backgroundColor: 'red',
          }}
          // sx={{ backgroundColor: 'red' }}
        >
          <Box sx={{
            // backgroundColor: 'blue',
            width: '80%' 
          }}>
            <FormControl
              sx={{ width: '100%' }}
            >
              <FormLabel>Cliente</FormLabel>
              <Input placeholder="Nombre" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CotizacionForm />
        </Grid>
      </Grid>
    </Modal>
  );
};
