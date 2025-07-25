import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CarViewPage from './pages/CarViewPage/CarViewPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CarViewPage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </Suspense>
  );
}

export default App;
