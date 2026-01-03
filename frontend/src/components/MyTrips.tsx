import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyTrips: React.FC<{ user: any }> = ({ user }) => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Initial state is true
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      setLoading(true); 
      fetch(`http://localhost:5000/api/trips/${user.email}`)
        .then(res => res.json())
        .then(data => {
          // FIXED: Now we properly stop the loading state
          setTrips(Array.isArray(data) ? data.reverse() : []);
          setLoading(false); 
        })
        .catch(err => {
          console.error("Fetch error:", err);
          setLoading(false); 
        });
    }
  }, [user?.email]);

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ backgroundColor: '#3182ce', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        ← Back to Dashboard
      </button>

      <h1 style={{ fontSize: '2.5rem', color: '#1a2b3c', marginTop: '30px', marginBottom: '40px' }}>
        My Saved Trips
      </h1>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>Loading your adventures...</p>
        </div>
      ) : trips.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {trips.map((trip, idx) => (
            <div key={idx} style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
              <h3 style={{ color: '#3182ce', marginTop: 0, fontSize: '1.5rem' }}>{trip.tripName}</h3>
              <p style={{ margin: '10px 0', color: '#4a5568' }}><strong>📍 Destination:</strong> {trip.destination}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#718096', fontSize: '0.9rem' }}>
                <span><strong>📅 From:</strong> {trip.startDate}</span>
                <span><strong>📅 To:</strong> {trip.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>No trips planned yet.</p>
          <button 
            onClick={() => navigate('/plan-trip')} 
            style={{ marginTop: '20px', padding: '12px 25px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '1rem' }}
          >
            Start Planning →
          </button>
        </div>
      )}
    </div>
  );
};

export default MyTrips;