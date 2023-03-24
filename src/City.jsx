import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function City() {
  const { cityName } = useContext(AppContext);

  return cityName && <h2>{cityName}</h2>;
}
