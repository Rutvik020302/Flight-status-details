import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FlightBoard from './pages/FlightBoard';
import FlightDetailPage from './pages/FlightDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<FlightBoard />} />
        <Route path="/flight/:id" element={<FlightDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
