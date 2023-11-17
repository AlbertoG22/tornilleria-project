import { DashboardLayout } from '../layout/dashboardLayout';
import { CotizacionView } from '../views/CotizacionView';
import { CotizacionModal } from '../components';

// ----------------------- Cotizaciones -----------------------
export const HomePage = () => {
  return (
    <DashboardLayout>
      <CotizacionView/>
      <CotizacionModal />
    </DashboardLayout>
  );
};