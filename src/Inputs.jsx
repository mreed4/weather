import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Inputs() {
  const { handleFormSubmit } = useContext(AppContext);

  return (
    <form onSubmit={handleFormSubmit}>
      <Input />
      <Button />
      {/* <button onClick={convertTemperature}>{(unit === "c" ? "f" : "c").toUpperCase()}</button> */}
    </form>
  );
}
