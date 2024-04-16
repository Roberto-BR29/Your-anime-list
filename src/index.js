// src/index.js
import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
