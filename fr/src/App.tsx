import React from 'react';
import HomePage from './pages/HomePage/HomePage'; // Import the HomePage component
import LoginPage from './pages/LoginPage/LoginPage'; // Import the LoginPage component
const App: React.FC = () => {
  return (
    <div>
      <LoginPage /> {/* Render the HomePage */}
    </div>
  );
};

export default App;