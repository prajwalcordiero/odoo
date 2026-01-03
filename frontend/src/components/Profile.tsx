import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC<{ user: any; setLoggedInUser: (user: any) => void }> = ({ user, setLoggedInUser }) => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState<any[]>([]);
  const firstLetter = user?.firstName?.charAt(0).toUpperCase() || '?';

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/trips/${user.email}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setUserTrips(data);
        })
        .catch(err => console.error("Error fetching profile trips:", err));
    }
  }, [user?.email]);

  return (
    <div className="profile-page">
      <style>{`
        .profile-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f4f8 0%, #dbeafe 100%);
          padding: 40px 5%;
          font-family: 'Inter', sans-serif;
        }
        .profile-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 30px;
        }
        /* Left Column: Sidebar Card */
        .profile-sidebar {
          background: white;
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          height: fit-content;
        }
        .profile-avatar-large {
          width: 120px;
          height: 120px;
          background: #2563eb;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 800;
          margin: 0 auto 20px;
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.2);
        }
        .profile-sidebar h2 { margin: 10px 0 5px; color: #1e293b; }
        .profile-sidebar p { color: #64748b; font-size: 0.9rem; margin-bottom: 30px; }
        
        .sidebar-menu { border-top: 1px solid #f1f5f9; padding-top: 20px; }
        .menu-btn {
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 12px;
          border: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
          transition: all 0.2s;
        }
        .menu-btn:hover { background: #f8fafc; color: #2563eb; }
        .logout-btn-red { color: #ef4444 !important; }

        /* Right Column: Details Content */
        .profile-main { display: flex; flex-direction: column; gap: 30px; }
        .info-section {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 35px;
          border: 1px solid white;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .section-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 25px; color: #1e293b; }
        
        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }
        .detail-box label { font-size: 0.75rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; }
        .detail-box p { margin: 5px 0 0; font-size: 1.05rem; color: #334155; font-weight: 500; }

        /* Stats Row */
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .stat-icon { font-size: 2rem; }
        .stat-val { font-size: 1.5rem; font-weight: 800; color: #1e293b; display: block; }
        .stat-label { font-size: 0.85rem; color: #64748b; }

        @media (max-width: 850px) {
          .profile-container { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="profile-container">
        {/* Left Column */}
        <aside className="profile-sidebar">
          <div className="profile-avatar-large">{firstLetter}</div>
          <h2>{user?.firstName} {user?.lastName}</h2>
          <p>{user?.email}</p>
          
          <div className="sidebar-menu">
            <button className="menu-btn" onClick={() => navigate('/')}>🏠 Dashboard Home</button>
            <button className="menu-btn" onClick={() => navigate('/my-trips')}>✈️ My Itineraries</button>
            <button className="menu-btn logout-btn-red" onClick={() => setLoggedInUser(null)}>🚪 Logout Account</button>
          </div>
        </aside>

        {/* Right Column */}
        <main className="profile-main">
          {/* Statistics Section */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">🌍</span>
              <div>
                <span className="stat-val">{userTrips.length}</span>
                <span className="stat-label">Trips Planned</span>
              </div>
            </div>
            <div className="stat-card" style={{cursor: 'pointer'}} onClick={() => navigate('/plan-trip')}>
              <span className="stat-icon">➕</span>
              <div>
                <span className="stat-val" style={{color: '#2563eb'}}>New</span>
                <span className="stat-label">Create Trip</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="info-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="details-grid">
              <div className="detail-box">
                <label>First Name</label>
                <p>{user?.firstName}</p>
              </div>
              <div className="detail-box">
                <label>Last Name</label>
                <p>{user?.lastName}</p>
              </div>
              <div className="detail-box">
                <label>Phone Number</label>
                <p>{user?.phone || '+0 000 000 000'}</p>
              </div>
              <div className="detail-box">
                <label>Location</label>
                <p>{user?.city}, {user?.country}</p>
              </div>
            </div>
          </div>

          {/* Bio/Additional Info Section */}
          <div className="info-section">
            <h3 className="section-title">About Me</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', margin: 0 }}>
              {user?.additionalInfo || "No bio added yet. Tell us about your travel style!"}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;