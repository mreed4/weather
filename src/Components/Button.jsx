import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Button() {
  const { isDisabled } = useContext(AppContext);

  return (
    <button type="submit" disabled={isDisabled}>
      Get weather
    </button>
  );
}
