import { AppProvider } from "./AppContext";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import City from "./City";
import Inputs from "./Inputs";

function App() {
  return (
    <AppProvider>
      <main className="App">
        <City />
        <Weather />
        <Forecast />
        <Inputs />
      </main>
    </AppProvider>
  );
}

export default App;
