import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage'; // Import the HomePage component

// Get the root element from the HTML file
const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container 'root' not found");
}

// Render the HomePage component
const root = createRoot(container);
root.render(<HomePage />);