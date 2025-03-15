import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './pages/App';
import PackageDetails from './pages/PackageDetails';
import PageNotFound from './pages/PageNotFound';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/package/:name" element={<PackageDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>,
);
