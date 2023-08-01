import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Input() {
  const { handleInputChange, appState } = useContext(AppContext);
  const { location } = appState;

  return <input type="text" name="city-name" id="city-name" placeholder="City name" value={location} onChange={handleInputChange} />;
}
