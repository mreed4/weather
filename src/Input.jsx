import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Input({ inputValue }) {
  const { handleInputChange, handleEnterKey } = useContext(AppContext);

  return (
    <input
      type="text"
      name="city-name"
      id="city-name"
      placeholder="City name"
      value={inputValue}
      onChange={handleInputChange}
      // onKeyUp={handleEnterKey}
    />
  );
}
