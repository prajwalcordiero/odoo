import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyTrips: React.FC<{ user: any }> = ({ user }) => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserTrips = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(`http://localhost:5000/api/trips/${user.email}`);
        const data = await response.json();
        
        // Safety check to ensure we received an array
        if (Array.isArray(data)) {
          setTrips(data);
        } else if (data.trips) {
          setTrips(data.trips);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserTrips();
  }, [user?.email]);

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ background: 'white', border: '1px solid #ccc', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer' }}
      >
        ← Back to Dashboard
      </button>

      <h1 style={{ fontSize: '3rem', color: '#1a2b3c', marginTop: '30px', marginBottom: '40px' }}>
        My Saved Trips
      </h1>

      {loading ? (
        <p>Loading your adventures...</p>
      ) : trips.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {trips.map((trip, idx) => (
            <div key={idx} style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
              <h3 style={{ color: '#3182ce', marginTop: 0, fontSize: '1.5rem' }}>{trip.tripName}</h3>
              <p style={{ margin: '10px 0', color: '#4a5568' }}><strong>📍 Destination:</strong> {trip.destination}</p>
              <p style={{ margin: '5px 0', color: '#718096' }}><strong>📅 Start:</strong> {trip.startDate}</p>
              <p style={{ margin: '5px 0', color: '#718096' }}><strong>📅 End:</strong> {trip.endDate}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>No trips planned yet.</p>
          <button 
            onClick={() => navigate('/plan-trip')} 
            style={{ marginTop: '20px', padding: '12px 25px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer' }}
          >
            Start Planning →
          </button>
        </div>
      )}
    </div>
  );
};

export default MyTrips;