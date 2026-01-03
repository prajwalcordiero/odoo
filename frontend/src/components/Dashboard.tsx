import React from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
  user: any;
  setLoggedInUser: (user: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setLoggedInUser }) => {
  const navigate = useNavigate();
  
  // Calculate avatar letter
  const firstLetter = user?.firstName?.charAt(0).toUpperCase() || '?';

  return (
    <div className="dashboard-wrapper">
      <nav className="navbar">
        <h1 className="logo">GlobalTrotter</h1>
        <div className="user-nav-section">
          <span className="user-name">{user.firstName} {user.lastName}</span>
          <div className="profile-avatar">{firstLetter}</div>
          <button className="logout-btn" onClick={() => setLoggedInUser(null)}>Logout</button>
        </div>
      </nav>

      <main className="dashboard-container">
        <div className="banner">
          <div className="banner-overlay">
            <h2>Explore Your Next Destination</h2>
            <p>Adventure is calling, {user.firstName}!</p>
          </div>
        </div>

        <div className="controls-row">
          <input type="text" className="search-bar" placeholder="Search destinations..." />
          <button className="control-btn">Group by</button>
          <button className="control-btn">Filter</button>
          <button className="control-btn">Sort by...</button>
        </div>

        <section className="dashboard-section">
          <h3 className="section-title">Top Regional Selections</h3>
          <div className="grid-container regional-grid">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="card region-card">
                <div className="card-image-placeholder"></div>
                <div className="card-label">Region {i}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <h3 className="section-title">Previous Trips</h3>
          <div className="grid-container trips-grid">
            {[1, 2, 3].map(i => (
              <div key={i} className="card trip-card">
                <div className="card-image-placeholder large"></div>
                <div className="card-info">
                  <h4>Trip History {i}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Navigation-based button */}
      <button className="plan-trip-fab" onClick={() => navigate('/plan-trip')}>
        <span className="plus-icon">+</span> Plan a trip
      </button>
    </div>
  );
};

export default Dashboard;