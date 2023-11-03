import { SearchField, TableComponent } from '../components';
import { DashboardLayout } from '../layout/dashboardLayout';
import { Typography } from '@mui/material';

export const SearchPage = () => {
  return (
    <DashboardLayout>
      {/* <Typography variant='h6'>Herramienta Urrea</Typography> */}
      <SearchField />
      <TableComponent />
    </DashboardLayout>
  );
};
