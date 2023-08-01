import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Button() {
  const { appState } = useContext(AppContext);
  const { location } = appState;

  return (
    <button type="submit" disabled={!location}>
      Get weather
    </button>
  );
}
