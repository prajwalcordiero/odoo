import React from 'react';
import { useNavigate } from 'react-router-dom';
import './plantrip.css';

const PlanTripPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save to MongoDB would go here
    alert("Trip Created Successfully!");
    navigate('/'); // Redirect back to dashboard after saving
  };

  return (
    <div className="plan-page-wrapper">
      {/* Header with Navigation */}
      <nav className="navbar">
        <h1 className="logo">GlobalTrotter</h1>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Dashboard
        </button>
      </nav>

      <div className="plan-container">
        <div className="plan-header">
          <h2>Plan Your New Trip</h2>
          <p>Fill in the details to start your adventure</p>
        </div>

        <form className="plan-trip-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Trip Name:</label>
            <input type="text" placeholder="e.g. Summer in Paris" required />
          </div>

          <div className="input-group">
            <label>Select a Place:</label>
            <input type="text" placeholder="Where are you going?" required />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Start Date:</label>
              <input type="date" required />
            </div>
            <div className="input-group">
              <label>End Date:</label>
              <input type="date" required />
            </div>
          </div>

          <hr className="divider" />
          
          <h4>Suggestions for Places to Visit / Activities</h4>
          <div className="suggestions-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="suggestion-card">
                <div className="suggestion-img"></div>
                <p>Activity {i}</p>
              </div>
            ))}
          </div>

          <button type="submit" className="save-trip-btn">Create Trip</button>
        </form>
      </div>
    </div>
  );
};

export default PlanTripPage;