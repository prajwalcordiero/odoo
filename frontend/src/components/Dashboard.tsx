<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGION_DATA } from '../data/regions';
import './dashboard.css';

const Dashboard: React.FC<{ user: any; setLoggedInUser: (user: any) => void }> = ({ user, setLoggedInUser }) => {
  const navigate = useNavigate();
  const [myTrips, setMyTrips] = useState<any[]>([]);
  const firstLetter = user?.firstName?.charAt(0).toUpperCase() || '?';

  // Fetch recent trips to show in the "Itineraries" section
  useEffect(() => {
    const fetchTrips = async () => {
      if (!user?.email) return;
      try {
        const response = await fetch(`http://localhost:5000/api/trips/${user.email}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setMyTrips(data.slice(0, 3)); // Show top 3 on dashboard
        }
      } catch (err) {
        console.error("Error loading trips:", err);
      }
    };
    fetchTrips();
  }, [user?.email]);

  return (
    <div className="dashboard-wrapper">
      <nav className="navbar">
        <h1 className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          GlobalTrotter
        </h1>
        
        <div className="nav-links">
          {/* NEW: My Trips Navigation Icon/Link */}
          <div className="nav-item" onClick={() => navigate('/my-trips')} style={{ cursor: 'pointer' }}>
            <span className="nav-text">My Trips</span>
          </div>
        </div>

        <div className="user-nav-section">
          <span className="user-name">{user?.firstName} {user?.lastName}</span>
>>>>>>> 95b7230 (modified code)
          <div className="profile-avatar">{firstLetter}</div>
          <button className="logout-btn" onClick={() => setLoggedInUser(null)}>Logout</button>
        </div>
      </nav>

      <main className="dashboard-container">
        <div className="banner">
          <div className="banner-overlay">
            <h2>Explore Your Next Destination</h2>
<<<<<<< HEAD
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
=======
            <p>Adventure is calling, {user?.firstName}!</p>
          </div>
        </div>

        {/* Itineraries Section (Displays data from your backend) */}
        <section className="dashboard-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="section-title">Your Recent Itineraries</h3>
            <span 
              onClick={() => navigate('/my-trips')} 
              style={{ color: '#3182ce', cursor: 'pointer', fontWeight: '600' }}
            >
              View All
            </span>
          </div>
          <div className="grid-container trips-grid">
            {myTrips.length > 0 ? (
              myTrips.map((trip, i) => (
                <div key={i} className="card trip-card">
                   <div className="card-info">
                      <h4>{trip.tripName}</h4>
                      <p>{trip.destination}</p>
                      <small>{trip.startDate} - {trip.endDate}</small>
                   </div>
                </div>
              ))
            ) : (
              <p>No trips planned yet. Click the button below to start!</p>
            )}
>>>>>>> 95b7230 (modified code)
          </div>
        </section>

        <section className="dashboard-section">
<<<<<<< HEAD
          <h3 className="section-title">Previous Trips</h3>
          <div className="grid-container trips-grid">
            {[1, 2, 3].map(i => (
              <div key={i} className="card trip-card">
                <div className="card-image-placeholder large"></div>
                <div className="card-info">
                  <h4>Trip History {i}</h4>
                </div>
=======
          <h3 className="section-title">Explore the World by Region</h3>
          <div className="grid-container regional-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {REGION_DATA.map(region => (
              <div key={region.id} className="card region-card" onClick={() => navigate(`/region/${region.id}`)}>
                <div className="card-image-container">
                  <img src={region.img} alt={region.name} className="card-img-fit" />
                </div>
                <div className="card-label">{region.name}</div>
>>>>>>> 95b7230 (modified code)
              </div>
            ))}
          </div>
        </section>
      </main>

<<<<<<< HEAD
      {/* Navigation-based button */}
=======
>>>>>>> 95b7230 (modified code)
      <button className="plan-trip-fab" onClick={() => navigate('/plan-trip')}>
        <span className="plus-icon">+</span> Plan a trip
      </button>
    </div>
  );
};

export default Dashboard;