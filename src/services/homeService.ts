// apiService.js
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

export default {
  // Función para obtener datos de la API
  async fetchData() {
    try {
      const response = await axios.get(`${API_URL}pokemon?limit=10&offset=0`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  // Función para enviar datos a la API
//   async sendData(data) {
//     try {
//       const response = await axios.post(`${API_URL}/data`, data);
//       return response.data;
//     } catch (error) {
//       console.error('Error sending data:', error);
//       throw error;
//     }
//   }
};
