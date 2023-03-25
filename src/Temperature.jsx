import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Temperature(props) {
  // console.log(props);
  const { weather } = useContext(AppContext);

  return weather && <span>{Number(props.temperature, 10).toFixed(1) + "\u00B0"}</span>;
}
