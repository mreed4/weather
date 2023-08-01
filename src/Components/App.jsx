import { useContext } from "react";
import { AppContext } from "./AppContext";

import "../css/App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";
import City from "./City";
import Inputs from "./Inputs";

function App() {
  const { appState } = useContext(AppContext);
  const { cityName } = appState;
  return (
    <main className="App">
      {cityName && (
        <>
          <City />
          <Weather />
          <Forecast />
        </>
      )}
      <Inputs />
    </main>
  );
}

export default App;
