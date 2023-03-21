import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Input() {
  const { location, handleOnChange } = useContext(AppContext);

  return (
    <div>
      <input type="text" name="city-name" id="city-name" placeholder="City name" value={location} onChange={handleOnChange} />
    </div>
  );
}
