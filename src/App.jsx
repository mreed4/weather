import { AppProvider } from "./AppContext";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Input from "./Input";
import Button from "./Button";
import City from "./City";

function App() {
  return (
    <AppProvider>
      <main className="App">
        <City />
        <Weather />
        <Forecast />
        <Input />
        <Button />
        {/* <button onClick={convertTemperature}>{(unit === "c" ? "f" : "c").toUpperCase()}</button> */}
      </main>
    </AppProvider>
  );
}

export default App;
