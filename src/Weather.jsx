import { useContext } from "react";
import { AppContext } from "./AppContext";
import Temperature from "./Temperature";

export default function Weather() {
  const { temp, unit, weather, weatherId } = useContext(AppContext);

  return (
    weather && (
      <h1>
        {temp && <Temperature temperature={temp} />} <i className={`wi wi-owm-${weatherId}`}></i>
      </h1>
    )
  );
}
