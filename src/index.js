import React from 'react';

import { ThemeProvider } from '@emotion/react';
import App from 'components/App/App';
import { theme } from 'constants/theme';
import ReactDOM from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
