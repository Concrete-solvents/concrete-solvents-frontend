// Libraries
import { Language } from '@Features/i18n/types/language.type';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { App } from './App';

// I18n
import i18n from '@Features/i18n/index';

// Styles
import './globals.css';

i18n.changeLanguage(Language.Russian);

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
