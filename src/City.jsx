import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function City() {
  const { cityName } = useContext(AppContext);

  return cityName && <h1>{cityName}</h1>;
}
