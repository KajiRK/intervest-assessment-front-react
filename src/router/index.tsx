import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

export default function Router () {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
