import { SearchField, TableComponent } from '../components';
import { Grid } from '@mui/material';

export const TableView = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs={12}>
          <SearchField />
        </Grid>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <TableComponent />
        </Grid>
      </Grid>
    </>
  );
};
