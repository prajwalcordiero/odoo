import React, { useState } from 'react';
import Registration from './components/Registration';
import Loading from './components/Loading';
import './App.css';

const App: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert(`Welcome, ${data.user.firstName}!`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error connecting to server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      {isLoading && <Loading />}
      {!isRegistering ? (
        <div className="login-card">
          <div className="photo-placeholder-small">Photo</div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit">Login</button>
          </form>
          <p className="toggle-link" onClick={() => setIsRegistering(true)}>
            Need an account? Register
          </p>
        </div>
      ) : (
        <div className="registration-card">
          <button onClick={() => setIsRegistering(false)} className="back-btn">← Back</button>
          <h2>Register</h2>
          <Registration setIsLoading={setIsLoading} />
        </div>
      )}
    </div>
  );
};

export default App;