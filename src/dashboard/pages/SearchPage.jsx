import { SearchField } from '../components';
import { DashboardLayout } from '../layout/dashboardLayout';
import { Grid, Typography } from '@mui/material';
import { TableView } from '../views';

export const SearchPage = () => {
  return (
    <DashboardLayout>
      {/* <Typography variant='h6'>Herramienta Urrea</Typography> */}
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Grid item xs={12}>
          <SearchField/>
        </Grid>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <TableView />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
