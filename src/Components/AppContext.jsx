import { createContext, useState, useCallback } from "react";

const AppContext = createContext();
function AppProvider({ children }) {
  const [appState, setAppState] = useState({
    location: "",
    unit: "f",
    temp: "",
    latLong: {},
    weather: "",
    weatherId: "",
    cityName: "",
    forecast: [],
  });

  const netlify = "/.netlify/functions";

  const { location } = appState;

  async function getWeather() {
    if (!location) return;

    const url = `${netlify}/search?location=${location}`;

    const response = await fetch(url);
    const city = await response.json();
    const { coord, name, main, weather } = city;
    const { feels_like } = main;
    const { id } = weather[0];

    setAppState((prev) => ({
      ...prev,
      temp: feels_like,
      latLong: coord,
      weather: weather[0].main,
      weatherId: id,
      cityName: name,
    }));
  }

  function convertDate(date) {
    const formatted = date.slice(date.indexOf("-") + 1, date.indexOf(" ")).replace(/\-/g, "/");
    return formatted;
  }

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      getWeather();
    },
    [location]
  );

  const handleInputChange = useCallback(
    (event) => {
      const { value } = event.target;
      setAppState((prev) => ({ ...prev, location: value }));
    },
    [location]
  );

  const value = {
    appState,
    setAppState,
    handleFormSubmit,
    handleInputChange,
    convertDate,
    netlify,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
