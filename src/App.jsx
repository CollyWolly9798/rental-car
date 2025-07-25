import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CarViewPage = lazy(() => import('./pages/CarViewPage/CarViewPage.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CarViewPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </Suspense>
  );
}

export default App;
