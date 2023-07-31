import { useContext } from "react";
import { AppContext } from "./AppContext";
import Temperature from "./Temperature";

export default function Weather() {
  const { temp, weather, weatherId } = useContext(AppContext);

  return (
    weather && (
      <div className="weather-now">
        {temp && <Temperature temperature={temp} />} <i className={`wi wi-owm-${weatherId}`}></i>
      </div>
    )
  );
}
