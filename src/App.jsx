import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CarViewPage from './pages/CarViewPage/CarViewPage.jsx';
import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarViewPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
