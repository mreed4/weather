import { useContext } from "react";
import { AppContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function City() {
  const { cityName, lat, lon } = useContext(AppContext);

  return (
    <div>
      <h2>{cityName}</h2>
      <p className="italic">
        {cityName && <FontAwesomeIcon icon={faMapLocationDot} />}{" "}
        <span className="small">
          {lat} {lon}
        </span>
      </p>
    </div>
  );
}
