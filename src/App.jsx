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
      <div className="App">
        <main>
          <City />
          <Weather />
          <Forecast />
        </main>
        <Input />
        <Button />
        {/* <button onClick={convertTemperature}>{(unit === "c" ? "f" : "c").toUpperCase()}</button> */}
      </div>
    </AppProvider>
  );
}

export default App;
