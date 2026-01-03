import React from 'react';
import './dashboard.css'; // We will add modal styles here

const PlanTripModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Plan Your New Trip</h3>
          <button className="close-x" onClick={onClose}>&times;</button>
        </div>

        <form className="plan-trip-form">
          <div className="input-group">
            <label>Trip Name:</label>
            <input type="text" placeholder="e.g. Summer in Paris" />
          </div>
          <div className="input-group">
            <label>Select a Place:</label>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Start Date:</label>
              <input type="date" />
            </div>
            <div className="input-group">
              <label>End Date:</label>
              <input type="date" />
            </div>
          </div>

          <hr />
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

export default PlanTripModal;