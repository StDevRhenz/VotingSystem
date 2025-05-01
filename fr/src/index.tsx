import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the App component

// Get the root element from the HTML file
const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container 'root' not found");
}

// Render the App component
const root = createRoot(container);
root.render(<App />);