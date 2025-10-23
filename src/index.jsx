import ReactDOM from 'react-dom/client';
import React from 'react';
import { configure } from 'mobx';
import { StoresProvider } from "./stores/index.jsx";
import { Routes } from "./routes.jsx";
import { Layout } from "./components/Layout.jsx";
import './styles/index.scss';

configure({
  enforceActions: 'never'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoresProvider>
    <Layout>
      <Routes />
    </Layout>
  </StoresProvider>
);
