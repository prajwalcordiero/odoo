import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="spinner"></div>
        <p>Searching for your next adventure...</p>
      </div>
    </div>
  );
};

export default Loading;