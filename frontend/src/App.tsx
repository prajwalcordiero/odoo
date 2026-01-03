import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Registration from './components/Registration';
import Loading from './components/Loading';
import './App.css';

const App: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
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
        setLoggedInUser(data.user);
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
    <Router>
      <div className="main-wrapper">
        {isLoading && <Loading />}

        {!loggedInUser ? (
          <div className="auth-container">
            {!isRegistering ? (
              <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="submit">Login</button>
                </form>
                <p className="toggle-link" onClick={() => setIsRegistering(true)}>Register</p>
              </div>
            ) : (
              <div className="registration-card">
                <button onClick={() => setIsRegistering(false)} className="back-btn">← Back</button>
                <Registration setIsLoading={setIsLoading} />
              </div>
            )}
          </div>
        ) : (
          <AppRoutes user={loggedInUser} setUser={setLoggedInUser} setIsLoading={setIsLoading} />
        )}
      </div>
    </Router>
  );
};

export default App;