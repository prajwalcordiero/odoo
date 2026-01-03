import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanTripPage: React.FC<{ user: any }> = ({ user }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ 
    tripName: '', 
    destination: '', 
    startDate: '', 
    endDate: '' 
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!user?.email) {
      alert("Error: User session not found. Please log in again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          userEmail: user.email 
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        navigate('/my-trips');
      } else {
        alert("Server error: " + (data.message || "Failed to save"));
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("Network Error: Make sure your server is running on port 5000!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="plan-container">
      <style>{`
        .plan-container { 
          min-height: 100vh; 
          background: #f8fafc; 
          font-family: 'Inter', system-ui, -apple-system, sans-serif; 
          color: #1e293b;
        }
        .plan-navbar { 
          background: white; 
          padding: 0.8rem 5%; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          border-bottom: 1px solid #e2e8f0;
        }
        .back-nav-btn { 
          background: transparent; 
          border: 1px solid #e2e8f0; 
          padding: 8px 16px; 
          border-radius: 8px; 
          cursor: pointer; 
          color: #64748b; 
          font-size: 0.85rem; 
          font-weight: 500;
          transition: all 0.2s ease;
        }
        /* Subtle Hover: No layout shift */
        .back-nav-btn:hover { 
          background: #f1f5f9;
          color: #0f172a;
          border-color: #cbd5e1;
        }
        .plan-card-wrapper { 
          display: flex; 
          justify-content: center; 
          padding: 4rem 1rem; 
        }
        .plan-card { 
          background: white; 
          padding: 2.5rem; 
          border-radius: 20px; 
          width: 100%; 
          max-width: 450px; 
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        /* Smooth Card Hover: Does not block other elements */
        .plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .input-group { margin-bottom: 1.5rem; }
        .input-group label { 
          display: block; 
          margin-bottom: 8px; 
          font-size: 0.85rem; 
          font-weight: 600; 
          color: #475569; 
        }
        .plan-form input { 
          width: 100%; 
          padding: 12px; 
          border: 1px solid #e2e8f0; 
          border-radius: 10px; 
          box-sizing: border-box;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        /* Input Focus: No blocking/shifting */
        .plan-form input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .plan-submit-btn { 
          width: 100%; 
          padding: 14px; 
          background: #2563eb; 
          color: white; 
          border: none; 
          border-radius: 10px; 
          font-weight: 600; 
          cursor: pointer; 
          margin-top: 10px;
          transition: opacity 0.2s ease, transform 0.1s active;
        }
        .plan-submit-btn:hover:not(:disabled) { 
          background: #1d4ed8;
          opacity: 0.95;
        }
        .plan-submit-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
      `}</style>

      <nav className="plan-navbar">
        <h1 className="logo" style={{ color: '#2563eb', margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>GlobalTrotter</h1>
        <button className="back-nav-btn" onClick={() => navigate('/')}>← Dashboard</button>
      </nav>

      <div className="plan-card-wrapper">
        <div className="plan-card">
          <h2 style={{textAlign: 'center', margin: '0 0 10px 0', fontSize: '1.75rem'}}>New Adventure</h2>
          <p style={{textAlign: 'center', color: '#64748b', marginBottom: '2rem'}}>Enter your details to generate your itinerary.</p>
          
          <form onSubmit={handleCreate}>
            <div className="input-group">
              <label>Trip Name</label>
              <input type="text" placeholder="e.g., Winter in Tokyo" required 
                onChange={(e) => setFormData({...formData, tripName: e.target.value})} />
            </div>
            
            <div className="input-group">
              <label>Destination</label>
              <input type="text" placeholder="City or Country" required 
                onChange={(e) => setFormData({...formData, destination: e.target.value})} />
            </div>
            
            <div style={{display: 'flex', gap: '15px'}}>
              <div className="input-group" style={{flex: 1}}>
                <label>Start Date</label>
                <input type="date" required onChange={(e) => setFormData({...formData, startDate: e.target.value})} />
              </div>
              <div className="input-group" style={{flex: 1}}>
                <label>End Date</label>
                <input type="date" required onChange={(e) => setFormData({...formData, endDate: e.target.value})} />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="plan-submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Trip"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanTripPage;