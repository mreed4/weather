import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function City() {
  const { appState } = useContext(AppContext);
  const { cityName } = appState;

  return (
    cityName && (
      <>
        <h1>{cityName}</h1>
        <hr />
      </>
    )
  );
}
