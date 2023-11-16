import { Box, Grid, Typography } from "@mui/material";
import { CotizacionCard, CotizacionForm, SearchField } from "../components";

export const CotizacionView = () => {
  return (
    <>
      {/* <CotizacionForm /> */}
      <Box sx={{ mb: 5 }}>
        <SearchField />
      </Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item sx={{ mt: 18, color: 'gray' }}>
          <Typography variant="h5">No hay cotizaciones existentes</Typography>
        </Grid>
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
      </Grid>
    </>
  );
};
