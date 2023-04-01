import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Inputs() {
  const { location, handleFormSubmit } = useContext(AppContext);

  return (
    <form onSubmit={handleFormSubmit}>
      <Input inputValue={location} />
      <Button />
      {/* <button onClick={convertTemperature}>{(unit === "c" ? "f" : "c").toUpperCase()}</button> */}
    </form>
  );
}
