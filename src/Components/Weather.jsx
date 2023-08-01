import { useContext } from "react";
import { AppContext } from "./AppContext";

import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const { appState } = useContext(AppContext);
  const { temp } = appState;

  return (
    <div className="weather-now">
      <Temperature temperature={temp} /> <WeatherIcon />
    </div>
  );
}
