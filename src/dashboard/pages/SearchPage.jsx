import { SearchField } from '../components';
import { DashboardLayout } from '../layout/dashboardLayout';
import { Typography } from '@mui/material';
import { TableView } from '../views';

export const SearchPage = () => {
  return (
    <DashboardLayout>
      {/* <Typography variant='h6'>Herramienta Urrea</Typography> */}
      <SearchField />
      <TableView />
    </DashboardLayout>
  );
};
