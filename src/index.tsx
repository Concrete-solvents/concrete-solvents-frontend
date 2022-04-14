// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { App } from './App';

// Enums
import { Language } from '@Enums/language.enum';

// Features
import i18n from '@Features/i18n/index';

// Styles
import './globals.css';

i18n.changeLanguage(Language.Russian);

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
