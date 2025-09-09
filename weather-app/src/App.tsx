import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const dataKey: string = import.meta.env.VITE_WEATHER_KEY;

  const getWeatherData = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${dataKey}&q=Malasiqui&days=7&aqi=yes&alerts=no`
    );
    setWeatherData(response.data);
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  
  console.log(weatherData ? weatherData.location.name : "no data");

  return <div>App</div>;
};

export default App;
