import { createContext, useState, useCallback } from "react";
import { config } from "../../config.js";

const API_KEY = config.API_KEY;

const AppContext = createContext();

function AppProvider({ children }) {
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("f");
  const [temp, setTemp] = useState("");
  const [latLong, setLatLong] = useState({});
  const [weather, setWeather] = useState("");
  const [weatherId, setWeatherId] = useState("");
  const [cityName, setCityName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { lat, lon } = latLong;

  function getWeather() {
    setIsDisabled(true);
    setTemp("");
    setWeather("");
    setCityName("");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const city = data;
        const coords = city?.coord;
        setCityName(city?.name);
        setTemp(city?.main?.feels_like);
        setLatLong({ ...coords });
        setWeather(city?.weather[0]?.main);
        setWeatherId(city?.weather[0]?.id);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  function convertTemperature() {
    setUnit(unit === "f" ? "c" : "f");
    if (unit === "f") {
      setTemp((temp - 32) * (5 / 9));
    } else {
      setTemp(temp * (9 / 5) + 32);
    }
  }

  function convertDate(date) {
    const formatted = date.slice(date.indexOf("-") + 1, date.indexOf(" ")).replace(/\-/g, "/");
    return formatted;
  }

  const handleInputChange = useCallback(
    (e) => {
      const { value } = e.target;
      if (value.length > 0) {
        setIsDisabled(false);
        setLocation(value);
      } else {
        setIsDisabled(true);
      }
    },
    [setLocation]
  );

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      getWeather();
      setLocation("");
    },
    [location]
  );

  const handleEnterKey = useCallback(
    (e) => {
      if (e.key === "Enter") {
        getWeather();
        setLocation("");
      }
    },
    [location]
  );

  const value = {
    location,
    unit,
    temp,
    lat,
    lon,
    weather,
    weatherId,
    cityName,
    isDisabled,
    getWeather,
    convertTemperature,
    convertDate,
    handleInputChange,
    handleFormSubmit,
    handleEnterKey,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
