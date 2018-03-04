import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const APPID = '18d56447d6b36f3e3705d3389af3fe46';

axios.interceptors.request.use((config) => {
  config.url += `&appid=${APPID}`;
  return config;
});

export default {
  getWeather({ city = '', uf = '' }) {
    const url = `${BASE_URL}/weather?q=${city},${uf}&units=metric`;

    return axios.get(url)
      .then(response => response.data && response.data.main);
  },
};
