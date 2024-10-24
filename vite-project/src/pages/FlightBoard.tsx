import React, { useState, useEffect } from 'react';
import FlightTable from '../components/FlightTable';
import { getFlights } from '../services/flightService';
import CarouselComponent from '../components/CarouselComponent'; // Import the Carousel

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
    const results = flights.filter((flight) =>
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
    <div className="flight-board">
      {/* Carousel */}
      <CarouselComponent />

      {/* Overlay Container for Title and Search */}
      <div className="overlay">
        <h1 className="travelopia">Travelopia</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search flights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            className="search-input"
          />
        </div>
      </div>

      {/* Flight Table */}
      <FlightTable flights={filteredFlights} />
    </div>
  );
};

export default FlightBoard;
