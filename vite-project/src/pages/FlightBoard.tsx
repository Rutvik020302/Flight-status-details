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
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search term

  const fetchFlights = async () => {
    try {
      const data = await getFlights();
      setFlights(data);
      setFilteredFlights(data); // Set initial filtered flights to all flights
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

  useEffect(() => {
    // Filter flights whenever the search term changes
    const results = flights.filter(flight =>
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFlights(results);
  }, [searchTerm, flights]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Flight Status Board</h1>
      
      {/* Centered search container */}
      <div style={{ margin: '20px auto', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Search flights..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          style={{
            padding: '10px',
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
      
      <FlightTable flights={filteredFlights} /> {/* Use filtered flights */}
    </div>
  );
};

export default FlightBoard;
