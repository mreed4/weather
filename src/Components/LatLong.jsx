import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LatLong() {
  const { appState } = useContext(AppContext);
  const { latLong } = appState;
  const { lat, lon } = latLong;

  return (
    <p className="italic">
      {<FontAwesomeIcon icon={faMapLocationDot} />}
      <span className="small">
        {lat} {lon}
      </span>
    </p>
  );
}
