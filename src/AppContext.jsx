import { createContext, useState } from "react";

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
    setLocation("");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5a35ef8f1d8400ee047265d3be990487`)
      .then((response) => response.json())
      .then((data) => {
        const city = data;
        const coords = city?.coord;
        setCityName(city?.name || "City does not exist");
        setTemp(city?.main.temp);
        setLatLong({ ...coords });
        setWeather(city?.weather[0].main);
        setWeatherId(city?.weather[0].id);
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

  function handleOnChange(e) {
    const { value } = e.target;
    if (value.length > 0) {
      setIsDisabled(false);
      setLocation(value);
    } else {
      setIsDisabled(true);
    }
  }

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
    handleOnChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
