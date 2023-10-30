import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Register & Login */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />

      {/* Dashboard */}
      <Route path='/*' element={ <DashboardRoutes /> } />
    </Routes>
  );
};
