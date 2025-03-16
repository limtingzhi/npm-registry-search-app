import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import PackageDetails from './pages/PackageDetails/PackageDetails';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SearchPackages from './pages/SearchPackages/SearchPackages';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<SearchPackages />} />
      <Route path="/package/:name" element={<PackageDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>,
);
