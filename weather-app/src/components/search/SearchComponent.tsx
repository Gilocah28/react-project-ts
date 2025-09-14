import "./Search.css";
import searchIcon from "../../assets/images/icon-search.svg";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { LocationComponent } from "./LocationComponent";

export type SearchResult = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export const SearchComponent = () => {
  const dataKey: string = import.meta.env.VITE_WEATHER_KEY;
  const [searchtext, setSearchText] = useState<string>("");
  const [searchData, setSearchData] = useState<SearchResult[]>([]);

  // Debpunce Method to get delay call Api

  const debounce = (callback: any, debounceTime = 500) => {
    let timer: any;
    return (...arg: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, arg);
      }, debounceTime);
    };
  };

  useEffect(() => {
    if (searchtext) {
      debounceCallAPI(searchtext);
    } else {
      setSearchData([]);
    }
  }, [searchtext]);

  const debounceCallAPI = useCallback(
    debounce((value: string) => handleCallApi(value), 500),
    []
  );

  const handleCallApi = async (value: string) => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${dataKey}&q=${value}`
    );
    setSearchData(response.data);
  };

  return (
    <div className="input-container">
      <h1> How's the sky looking today?</h1>
      <div className="search-container">
        <div className="search">
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Saerch for a City..."
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button>Search</button>
      </div>
      {searchData.length > 0 && searchtext && (
        <div className="search-container-data">
          {searchData?.map((locationData) => (
            <LocationComponent
              key={locationData.id}
              name={locationData.name}
              region={locationData.region}
              country={locationData.country}
            />
          ))}
        </div>
      )}
    </div>
  );
};
