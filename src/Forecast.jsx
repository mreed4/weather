import { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";
import Temperature from "./Temperature";

export default function Forecast() {
  const [forecast, setForecast] = useState([]);
  const { lat, lon, cityName, convertDate } = useContext(AppContext);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=5a35ef8f1d8400ee047265d3be990487`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const noon = data.list.filter((item) => item.dt_txt.includes("12:00:00"));
        const weatherIds = noon.map((item) => item.weather[0].id);
        const temps = noon.map((item) => item.main.temp);
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
    forecast && (
      <ol>
        {forecast.map((day, i) => {
          return (
            <li key={i} className="forecast-day">
              <i className={`wi wi-owm-${day.id} larger`}></i>
              <Temperature temperature={day.temp} />
              <span>{day.date}</span>
            </li>
          );
        })}
      </ol>
    )
  );
}
