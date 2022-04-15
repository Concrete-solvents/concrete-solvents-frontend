// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { App } from './App';

// Features
import '@Features/i18n/index';

// Styles
import './globals.css';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
