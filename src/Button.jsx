import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Button() {
  const { getWeather, isDisabled } = useContext(AppContext);

  return (
    <button onClick={getWeather} disabled={isDisabled}>
      Get weather
    </button>
  );
}
