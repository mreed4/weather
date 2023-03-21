import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Weather() {
  const { temp, unit, weatherId } = useContext(AppContext);

  return (
    <h1>
      {temp && Number(temp, 10).toFixed(1) + "\u00B0" + unit.toUpperCase()} <i className={`wi wi-owm-${weatherId}`}></i>
    </h1>
  );
}
