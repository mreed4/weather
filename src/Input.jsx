import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Input() {
  const { location, handleInputChange, handleEnterKey } = useContext(AppContext);

  return (
    <input
      type="text"
      name="city-name"
      id="city-name"
      placeholder="City name"
      value={location}
      onChange={handleInputChange}
      onKeyUp={handleEnterKey}
    />
  );
}
