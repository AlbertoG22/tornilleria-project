import { SearchField } from '../components/SearchField';
import TableComponent from '../components/TableComponent';
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
