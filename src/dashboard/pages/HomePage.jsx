import { Typography } from '@mui/material';
import { DashboardLayout } from '../layout/dashboardLayout';
import { CotizacionForm } from '../components';

export const HomePage = () => {

  return (
    <DashboardLayout>
      <Typography variant='h6'>Cotizaciones</Typography>
      <CotizacionForm />
    </DashboardLayout>
  );
};