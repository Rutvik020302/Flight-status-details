import axios from 'axios';

const API_BASE_URL = 'https://flight-status-mock.core.travelopia.cloud/flights';

export const getFlights = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const getFlightById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};
