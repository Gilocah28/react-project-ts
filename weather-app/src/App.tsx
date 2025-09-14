import { useEffect, useState } from "react";
import axios from "axios";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { SearchComponent } from "./components/search/SearchComponent";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchVal, setSearchVal] = useState("Malasiqui");
  const dataKey: string = import.meta.env.VITE_WEATHER_KEY;

  const getWeatherData = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${dataKey}&q=${searchVal}&days=7&aqi=yes&alerts=no`
    );
    setWeatherData(response.data);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="app">
      <HeaderComponent />
      <SearchComponent />
    </div>
  );
};

export default App;
