<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './plantrip.css';

const PlanTripPage: React.FC<{ user: any }> = ({ user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    startDate: '',
    endDate: ''
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verification: Ensure user is logged in
    if (!user?.email) {
      alert("Please log in to save a trip.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: user.email // Crucial: Link trip to the current user
        }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/my-trips');
      } else {
        alert("Failed to create trip: " + data.message);
      }
    } catch (error) {
      console.error("Error saving trip:", error);
      alert("Server error. Please check if your backend is running.");
    }
>>>>>>> 95b7230 (modified code)
  };

  return (
    <div className="plan-page-wrapper">
<<<<<<< HEAD
      {/* Header with Navigation */}
      <nav className="navbar">
        <h1 className="logo">GlobalTrotter</h1>
        <button className="back-btn" onClick={() => navigate('/')}>
=======
      <nav className="plan-navbar">
        <h1 className="logo" style={{ color: '#3182ce', fontWeight: 'bold' }}>GlobalTrotter</h1>
        <button className="back-nav-btn" onClick={() => navigate('/')}>
>>>>>>> 95b7230 (modified code)
          ← Back to Dashboard
        </button>
      </nav>

<<<<<<< HEAD
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
=======
      <div className="plan-content-area">
        <div className="plan-card">
          <div className="plan-header-text">
            <h2>Plan Your New Trip</h2>
            <p>Fill in the details to start your adventure</p>
          </div>

          <form className="plan-form" onSubmit={handleCreate}>
            <input 
              type="text" 
              placeholder="e.g. Summer in Paris" 
              required
              onChange={(e) => setFormData({...formData, tripName: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Where are you going?" 
              required
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
            />
            
            <div className="plan-row">
              <input type="date" required onChange={(e) => setFormData({...formData, startDate: e.target.value})} />
              <input type="date" required onChange={(e) => setFormData({...formData, endDate: e.target.value})} />
            </div>

            <button type="submit" className="plan-submit-btn">Create Trip</button>
          </form>
        </div>
>>>>>>> 95b7230 (modified code)
      </div>
    </div>
  );
};

export default PlanTripPage;