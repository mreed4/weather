import { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";

import Temperature from "./Temperature";

export default function Forecast() {
  const { appState, setAppState, netlify, convertDate } = useContext(AppContext);
  const { cityName, latLong, forecast } = appState;
  const { lat, lon } = latLong;

  useEffect(() => {
    if (!cityName) return;

    (async () => {
      const url = `${netlify}/getForecast?lat=${lat}&lon=${lon}`;
      const response = await fetch(url);
      const data = await response.json();
      const { list } = data;

      const noon = list.filter((day) => day.dt_txt.includes("12:00:00"));

      const forecast = noon.map((day) => {
        const { dt_txt, main, weather } = day;
        const { temp } = main;
        const { id } = weather[0];
        const date = convertDate(dt_txt);
        return { date, temp, id };
      });

      setAppState((prev) => ({ ...prev, forecast }));
    })();
  }, [cityName]);

  return (
    <ol className="forecast">
      {forecast.map((day, i) => {
        const { date, temp, id } = day;
        return (
          <li key={i} className="forecast-day">
            <i className={`wi wi-owm-${id} larger`}></i>
            <Temperature temperature={temp} />
            <span className="small italic">{date}</span>
          </li>
        );
      })}
    </ol>
  );
}
