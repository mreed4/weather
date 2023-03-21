import { createContext } from "react";

const AppContext = React.createContext();

export function AppWrapper({ children }) {
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("f");
  const [temp, setTemp] = useState("");
  const [latLong, setLatLong] = useState({});
  const [weather, setWeather] = useState("");
  const [weatherId, setWeatherId] = useState("");
  const { lat, lon } = latLong;

  function getWeather() {
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

  const value = {
    location,
    setLocation,
    unit,
    setUnit,
    temp,
    setTemp,
    latLong,
    setLatLong,
    weather,
    setWeather,
    weatherId,
    setWeatherId,
    lat,
    lon,
    getWeather,
    convertTemperature,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
