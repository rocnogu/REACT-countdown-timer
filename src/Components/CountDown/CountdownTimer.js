import { useState, useEffect } from "react";
//
import "./CountdownTimer.css";
//
import { CountdownUtils } from "./Utils/CountdownUtils";

import Card from "react-bootstrap/Card";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

////////////////////////////////
export default function CountdownTimer() {
  //
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  //
  function updateRemainingTime(countdown) {
    setRemainingTime(CountdownUtils(countdown));
  }
  //////
  const epochTime = new Date(2222, 2, 22, 2, 2, 2, 2);

  const countdownInMS = epochTime.getTime();
  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownInMS);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownInMS]);

  ////////////////////////////////
  return (
    <div className="countdown">
      <Card>
        <Card.Header>
          Time left until 2222 year, 2 month, 2 day, 2 hours, 2 minutes, 2
          seconds.
        </Card.Header>
        <hr />
        <Card.Body>
          <Card.Text>
            <span>{remainingTime.days}</span>
            <span> days, </span>
            <span>{remainingTime.hours}</span>
            <span> hours, </span>
            <span>{remainingTime.minutes}</span>
            <span> minutes, </span>
            <span>{remainingTime.seconds}</span>
            <span> seconds </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
