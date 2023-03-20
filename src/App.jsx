import { useState } from "react";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [unit, setUnit] = useState("f");
  const [temp, setTemp] = useState("");
  const [latLong, setLatLong] = useState({});
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const { lat, lon } = latLong;

  function getWeather() {
    setUnit("f");
    setLocation("");
    setTemp("");
    setLatLong({});
    setCityName("");
    setWeatherIcon("");
    setWeather("");
    setIsDisabled(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5a35ef8f1d8400ee047265d3be990487`)
      .then((response) => response.json())
      .then((data) => {
        const city = data;
        const coords = city?.coord;
        setCityName(city?.name || "City does not exist");
        setTemp(city?.main.temp);
        setLatLong({ ...coords });
        setWeather(city?.weather[0].main);
        setWeatherIcon(city?.weather[0].icon);
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

  return (
    <div className="App">
      <main>
        <div>
          <h1>{cityName}</h1>
          <p>
            {weather && Number(temp, 10).toFixed(1) + "\u00B0" + unit.toUpperCase()} {weather}
          </p>
          {/* <p className="italic">
            {lat} {lon}
          </p> */}
        </div>
        <div>{weatherIcon && <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={weather} />}</div>
      </main>
      <input type="text" name="city-name" id="city-name" placeholder="City name" value={location} onChange={handleOnChange} />
      <button onClick={getWeather} disabled={isDisabled}>
        Get weather
      </button>{" "}
      <button onClick={convertTemperature}>{(unit === "c" ? "f" : "c").toUpperCase()}</button>
    </div>
  );
}

export default App;
