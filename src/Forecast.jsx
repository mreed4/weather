import { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";
import Temperature from "./Temperature";
import { config } from "../config.js";

const API_KEY = config.API_KEY;

export default function Forecast() {
  const [forecast, setForecast] = useState([]);
  const { lat, lon, cityName, convertDate } = useContext(AppContext);

  useEffect(() => {
    cityName &&
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const noon = data.list.filter((item) => item.dt_txt.includes("12:00:00"));
          const weatherIds = noon.map((item) => item.weather[0].id);
          const temps = noon.map((item) => item.main.feels_like);
          const dates = noon.map((item) => convertDate(item.dt_txt));
          const forecastList = weatherIds.map((id, index) => {
            return {
              id,
              temp: temps[index],
              date: dates[index],
            };
          });
          setForecast(forecastList);
        })
        .catch((error) => console.error(error));
  }, [cityName]);

  return (
    cityName && (
      <ol className="forecast">
        {forecast.map((day, i) => {
          return (
            <li key={i} className="forecast-day">
              <i className={`wi wi-owm-${day.id} larger`}></i>
              <Temperature temperature={day.temp} />
              <span className="small italic">{day.date}</span>
            </li>
          );
        })}
      </ol>
    )
  );
}
