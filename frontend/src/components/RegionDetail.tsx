import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { REGION_DATA } from '../data/regions';

const RegionDetail: React.FC<{ user: any }> = ({ user }) => {
  const { regionId } = useParams();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  // Find the specific region data
  const region = REGION_DATA.find(r => r.id === regionId);

  if (!region) return <div>Region not found</div>;

  const handleQuickAdd = async () => {
    if (!user?.email) {
      alert("Please log in to save trips!");
      return;
    }

    setIsAdding(true);
    
    // Set default dates (e.g., a one-week trip starting tomorrow)
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const tripData = {
      tripName: `My ${region.name} Adventure`,
      destination: region.name,
      startDate: today.toISOString().split('T')[0],
      endDate: nextWeek.toISOString().split('T')[0],
      userEmail: user.email
    };

    try {
      const response = await fetch('http://localhost:5000/api/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tripData),
      });

      const data = await response.json();
      if (data.success) {
        navigate('/my-trips');
      }
    } catch (error) {
      console.error("Error adding region trip:", error);
      alert("Failed to add trip automatically.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="region-detail-container">
      <style>{`
        .region-detail-container { padding: 40px 5%; font-family: 'Inter', sans-serif; background: #f0f4f8; min-height: 100vh; }
        .detail-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); max-width: 900px; margin: 0 auto; }
        .detail-img { width: 100%; height: 400px; object-fit: cover; }
        .detail-content { padding: 40px; }
        .btn-group { display: flex; gap: 15px; margin-top: 30px; }
        .back-btn { padding: 12px 24px; border-radius: 10px; border: 1px solid #e2e8f0; background: white; cursor: pointer; }
        .add-trip-btn { 
          padding: 12px 24px; 
          border-radius: 10px; 
          border: none; 
          background: #2563eb; 
          color: white; 
          font-weight: 600; 
          cursor: pointer;
          transition: transform 0.2s;
        }
        .add-trip-btn:hover { transform: scale(1.02); background: #1d4ed8; }
        .add-trip-btn:disabled { background: #94a3b8; }
      `}</style>

      <div className="detail-card">
        <img src={region.img} alt={region.name} className="detail-img" />
        <div className="detail-content">
          <h1 style={{ fontSize: '2.5rem', margin: '0 0 20px 0' }}>{region.name}</h1>
          <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1.1rem' }}>
            {region.description || "Explore the breathtaking landscapes and vibrant culture of this region. Plan your itinerary to discover hidden gems and world-famous landmarks."}
          </p>

          <div className="btn-group">
            <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
            <button 
              className="add-trip-btn" 
              onClick={handleQuickAdd}
              disabled={isAdding}
            >
              {isAdding ? "Adding..." : `Plan a Trip to ${region.name}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDetail;  