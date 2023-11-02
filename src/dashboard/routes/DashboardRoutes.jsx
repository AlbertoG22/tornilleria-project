import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/search' element={ <SearchPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
};
