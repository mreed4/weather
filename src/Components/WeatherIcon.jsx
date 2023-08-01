import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function WeatherIcon() {
  const { appState } = useContext(AppContext);
  const { weather, weatherId } = appState;

  return weather && <i className={`wi wi-owm-${weatherId}`}></i>;
}
