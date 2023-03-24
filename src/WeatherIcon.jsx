import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function WeatherIcon() {
  const { weather, weatherId } = useContext(AppContext);

  return weather && <i className={`wi wi-owm-${weatherId}`}></i>;
}
