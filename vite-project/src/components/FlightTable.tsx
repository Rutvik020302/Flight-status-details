import React from 'react';
import { Link } from 'react-router-dom';

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

interface FlightTableProps {
  flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => {
  return (
    <table className="flight-table">
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Airline</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id} style={{ cursor: 'pointer' }}>
            <td>
              <Link to={`/flight/${flight.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {flight.flightNumber}
              </Link>
            </td>
            <td>
              <Link to={`/flight/${flight.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {flight.airline}
              </Link>
            </td>
            <td>
              <Link to={`/flight/${flight.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {flight.origin}
              </Link>
            </td>
            <td>
              <Link to={`/flight/${flight.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {flight.destination}
              </Link>
            </td>
            <td>
              <Link to={`/flight/${flight.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {new Date(flight.departureTime).toLocaleString()}
              </Link>
            </td>
            <td>
              <Link to={`/flight/${flight.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {flight.status}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable;
