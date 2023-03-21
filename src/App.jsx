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
  const [weatherId, setWeatherId] = useState("");
  const { lat, lon } = latLong;

  function getWeather() {
    setUnit("f");
    setLocation("");
    setTemp("");
    setLatLong({});
    setCityName("");
    setWeatherId("");
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

  return (
    <div className="App">
      <main>
        <div>
          <h1>
            {temp && Number(temp, 10).toFixed(1) + "\u00B0" + unit.toUpperCase()} <i className={`wi wi-owm-${weatherId}`}></i>
          </h1>
          <h2>{cityName}</h2>
          {/* <p className="italic">
            {lat} {lon}
          </p> */}
        </div>
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
