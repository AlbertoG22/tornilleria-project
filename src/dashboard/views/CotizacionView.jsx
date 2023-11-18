import { Box, Grid, Typography } from '@mui/material';
import { CotizacionModal, IconBtn } from '../components';
import { useState } from 'react';

export const CotizacionView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box sx={{ mb: 5 }}>
        {/* <SearchField /> */}
        <Grid display='flex' justifyContent='center' alignItems='center' sx={{ mt: 10, color: 'gray' }}>
          <Typography variant="h5">No hay cotizaciones existentes</Typography>
        </Grid>
      </Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {/* <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
          </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
        <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
        <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
        <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
        <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
        <CotizacionCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
        <CotizacionCard />
      </Grid> */}
        <IconBtn handleOpenModal={handleOpenModal} />
        <CotizacionModal isModalOpen={isModalOpen} onCloseModal={handleCloseModal} />
      </Grid>
    </>
  );
};
