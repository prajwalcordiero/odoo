import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import PlanTripPage from '../components/PlanTripPage';
import RegionDetail from '../components/RegionDetail';
import MyTrips from '../components/MyTrips';
import Profile from '../components/Profile';

interface AppRoutesProps {
  user: any;
  setUser: (user: any) => void;
  setIsLoading: (loading: boolean) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ user, setUser, setIsLoading }) => {
  return (
    <Routes>
      {/* Dashboard - Home Route */}
      <Route 
        path="/" 
        element={<Dashboard user={user} setLoggedInUser={setUser} />} 
      />
      
      {/* Plan Trip Route */}
      <Route path="/plan-trip" element={<PlanTripPage user={user} />} />
      
      {/* My Trips Route */}
      <Route path="/my-trips" element={<MyTrips user={user} />} />
      
      {/* Regional Detail Route */}
      <Route path="/region/:regionId" element={<RegionDetail user={user} />} />
      
      {/* Catch-all: Redirect unknown paths to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/profile" element={<Profile user={user} setLoggedInUser={setUser} />} />
    </Routes>
  );
};

export default AppRoutes;