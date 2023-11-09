import { Box, Grid } from "@mui/material";
import { CotizacionCard, CotizacionForm } from "../components";

export const CotizacionView = () => {
  return (
    <>
      {/* <CotizacionForm /> */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
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
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ mb: 5 }}>
          <CotizacionCard />
        </Grid>
      </Grid>
    </>
  );
};
