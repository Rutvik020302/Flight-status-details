import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFlightById } from '../services/flightService';
import '../App.css'

interface FlightDetail {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
 
}

const FlightDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<FlightDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFlightDetail = async (flightId: string) => {
    try {
      const data = await getFlightById(flightId);
      setFlight(data);
      setError(null); 
    } catch (err) {
      console.error(err);
      setError('Failed to load flight details. Please try again later.');
    }
  };

  useEffect(() => {
    if (id) {
      fetchFlightDetail(id);
    }
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>; 
  }

  if (!flight) {
    return <div>Loading flight details...</div>; 
  }

  return (
    <div className="flight-detail">
      <h2>Flight Details for {flight.flightNumber}</h2>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {new Date(flight.departureTime).toLocaleString()}</p>
      <p>Status: {flight.status}</p>
      
      <button className="button" onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default FlightDetailPage;
