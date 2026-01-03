import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import PlanTripPage from '../components/PlanTripPage';
<<<<<<< HEAD
=======
import RegionDetail from '../components/RegionDetail';
import MyTrips from '../components/MyTrips';
>>>>>>> 95b7230 (modified code)

interface AppRoutesProps {
  user: any;
  setUser: (user: any) => void;
  setIsLoading: (loading: boolean) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ user, setUser, setIsLoading }) => {
  return (
    <Routes>
<<<<<<< HEAD
      {/* 1. Dashboard Route */}
      <Route 
        path="/" 
        element={user ? <Dashboard user={user} setLoggedInUser={setUser} /> : <Navigate to="/" />} 
      />
      
      {/* 2. Plan Trip Page Route */}
      <Route 
        path="/plan-trip" 
        element={user ? <PlanTripPage /> : <Navigate to="/" />} 
      />

      {/* 3. Fallback for any other URL */}
      <Route path="*" element={<Navigate to="/" />} />
=======
      {/* FIXED: Changed setLoggedInUser to setUser to match the prop name above */}
      <Route 
        path="/" 
        element={<Dashboard user={user} setLoggedInUser={setUser} />} 
      />
      
      <Route path="/plan-trip" element={<PlanTripPage user={user} />} />
      <Route path="/my-trips" element={<MyTrips user={user} />} />
      <Route path="/region/:regionId" element={<RegionDetail />} />
      
      {/* Optional: Catch-all redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
>>>>>>> 95b7230 (modified code)
    </Routes>
  );
};

export default AppRoutes;