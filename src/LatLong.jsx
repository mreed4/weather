import { useContext } from "react";
import { AppContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LatLong() {
  const { cityName, lat, lon } = useContext(AppContext);

  return (
    cityName && (
      <p className="italic">
        {<FontAwesomeIcon icon={faMapLocationDot} />}
        <span className="small">
          {lat} {lon}
        </span>
      </p>
    )
  );
}
