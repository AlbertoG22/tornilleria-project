import { Typography } from '@mui/material';
import { DashboardLayout } from '../layout/dashboardLayout';
import { CotizacionView } from '../views/CotizacionView';

export const HomePage = () => {

  return (
    <DashboardLayout>
      {/* <Typography variant='h6'>Cotizaciones</Typography> */}
      <CotizacionView />
    </DashboardLayout>
  );
};