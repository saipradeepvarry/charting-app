import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Suppress specific warnings
const suppressedWarnings = ['Support for defaultProps will be removed from function components'];

const consoleWarn = console.warn;
console.warn = (message, ...args) => {
  if (!suppressedWarnings.some(entry => message.includes(entry))) {
    consoleWarn(message, ...args);
  }
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);