import React from 'react';
import Header from '../../components/Header/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        Hello World! This is the Home Page.
      </div>
    </div>
  );
};

export default HomePage;