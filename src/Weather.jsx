import { useContext } from "react";
import { AppContext } from "./AppContext";
import Temperature from "./Temperature";

export default function Weather() {
  const { temp, weather, weatherId } = useContext(AppContext);

  return (
    weather && (
      <p className="weather-now">
        {temp && <Temperature temperature={temp} />} <i className={`wi wi-owm-${weatherId}`}></i>
      </p>
    )
  );
}
