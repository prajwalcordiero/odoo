import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { REGION_DATA } from '../data/regions';

const RegionDetail: React.FC = () => {
  const { regionId } = useParams();
  const navigate = useNavigate();
  const region = REGION_DATA.find(r => r.id === regionId);

  if (!region) return <div style={{padding: '50px'}}>Region Not Found</div>;

  return (
    <div className="region-detail-page" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <nav style={{ background: 'white', padding: '15px 5%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <button onClick={() => navigate('/')} className="back-btn">← Back to Dashboard</button>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ fontSize: '3rem', color: '#1e293b' }}>{region.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b' }}>{region.description}</p>
        </header>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '25px', color: '#334155' }}>Top Cities to Explore</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {region.cities.map((city, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px rgba(0,0,0,0.05)' }}>
                <img src={city.img} alt={city.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: 0 }}>{city.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '25px', color: '#334155' }}>Must-See Attractions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {region.attractions.map((attr, idx) => (
              <div key={idx} style={{ display: 'flex', background: 'white', padding: '25px', borderRadius: '15px', alignItems: 'center', gap: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3182ce', minWidth: '40px' }}>0{idx + 1}</div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{attr.name}</h4>
                  <p style={{ margin: 0, color: '#475569' }}>{attr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegionDetail;