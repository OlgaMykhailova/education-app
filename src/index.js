import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="education-app">
    <React.StrictMode>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
