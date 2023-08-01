import { AppProvider } from "./AppContext";

import "../css/App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";
import City from "./City";
import Inputs from "./Inputs";
import LatLong from "./LatLong";

function App() {
  return (
    <AppProvider>
      <main className="App">
        <City />
        {/* <LatLong /> */}
        <Weather />
        <Forecast />
        <Inputs />
      </main>
    </AppProvider>
  );
}

export default App;
