import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Offline.scss";

const Offline = props => {
  const setOfflineStatus = () => {
    props.setOffline(!navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", setOfflineStatus);
    window.addEventListener("offline", setOfflineStatus);
    return () => {
      window.removeEventListener("online", setOfflineStatus);
      window.removeEventListener("offline", setOfflineStatus);
    };
  });
  return props.offline ? (
    <div className="c-offline">
      <FontAwesomeIcon className="c-icon" icon={["fas", "wifi"]} /> Offline
    </div>
  ) : null;
};

export { Offline };
