import { SearchField } from '../components/SearchField';
import { DashboardLayout } from '../layout/dashboardLayout';
import { Typography } from '@mui/material';

export const SearchPage = () => {
  return (
    <DashboardLayout>
      {/* <Typography variant='h6'>Herramienta Urrea</Typography> */}
      <SearchField />
    </DashboardLayout>
  );
};
