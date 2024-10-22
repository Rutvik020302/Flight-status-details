import React, { useState, useEffect } from 'react';
import FlightTable from '../components/FlightTable';
import { getFlights } from '../services/flightService';

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightBoard: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchFlights = async () => {
    try {
      const data = await getFlights();
      setFlights(data);
      setError(null); 
    } catch (err) { 
      setError('Failed to load flights. Please try again later.');
      console.error(err); 
    }
  };

  useEffect(() => {
    fetchFlights();
    const intervalId = setInterval(fetchFlights, 10000); 
    return () => clearInterval(intervalId); 
  }, []);


  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <h1>Flight Status Board</h1>
      <FlightTable flights={flights} />
    </div>
  );
};

export default FlightBoard;
