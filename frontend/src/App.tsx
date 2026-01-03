import React, { useState } from 'react';
import Registration from './components/Registration';
import Loading from './components/Loading.tsx'; 
import './App.css';

const App: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    // Simulate a 2-second lag (like a database check)
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      alert("Login Successful!");
    }, 2000);
  };

  return (
    <div className="main-wrapper">
      {/* If isLoading is true, show the loading screen */}
      {isLoading && <Loading />}

      {!isRegistering ? (
        <div className="login-card">
          <div className="photo-placeholder-small">Photo</div>
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p className="toggle-link" onClick={() => setIsRegistering(true)}>
            New traveler? Create an account
          </p>
        </div>
      ) : (
        <div className="registration-card">
          <button onClick={() => setIsRegistering(false)} className="back-btn">
            ← Back to Login
          </button>
          <h2>Register</h2>
          <Registration />
        </div>
      )}
    </div>
  );
};

export default App;