import { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";

export default function Forecast() {
  const [forecast, setForecast] = useState([]);
  const { lat, lon, cityName } = useContext(AppContext);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=5a35ef8f1d8400ee047265d3be990487`)
      .then((response) => response.json())
      .then((data) => {
        const noon = data.list.filter((item) => item.dt_txt.includes("12:00:00"));
        const weatherIds = noon.map((item) => item.weather[0].id);
        const temps = noon.map((item) => item.main.temp);
        const dates = noon.map((item) => item.dt_txt);
        const forecastList = weatherIds.map((id, index) => {
          return {
            id,
            temp: temps[index],
            date: dates[index],
          };
        });
        setForecast(forecastList);
        console.log(forecast);
      })
      .catch((error) => console.error(error));
  }, [cityName]);

  return (
    forecast && (
      <ol>
        {forecast.map((day) => {
          return (
            <li>
              <i className={`wi wi-owm-${day.id}`}></i>
              <span>{day.date}</span>
              <span>{day.temp}</span>
            </li>
          );
        })}
      </ol>
    )
  );
}
