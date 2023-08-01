import { useContext } from "react";
import { AppContext } from "./AppContext";

import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const { appState } = useContext(AppContext);
  const { weather, temp } = appState;

  return (
    weather && (
      <div className="weather-now">
        {temp && <Temperature temperature={temp} />} {weather && <WeatherIcon />}
      </div>
    )
  );
}
