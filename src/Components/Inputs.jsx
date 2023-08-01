import { useContext } from "react";
import { AppContext } from "./AppContext";

import Input from "./Input";
import Button from "./Button";

export default function Inputs() {
  const { location, handleFormSubmit } = useContext(AppContext);

  return (
    <form onSubmit={handleFormSubmit}>
      <Input />
      <Button />
      {/* <button onClick={convertTemperature}>{(unit === "c" ? "f" : "c").toUpperCase()}</button> */}
    </form>
  );
}
