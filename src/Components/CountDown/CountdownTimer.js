import { useState, useEffect } from "react";
//
import "./CountdownTimer.css";
//
import { CountdownUtils } from "./Utils/CountdownUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

////////////////////////////////
const CountdownTimer = () => {
  //
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  //
  function updateRemainingTime(countdown) {
    setRemainingTime(CountdownUtils(countdown));
  }
  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownInMS);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  //////
  const epochTime = new Date(2222, 2, 22, 2, 2, 2, 2);

  const countdownInMS = epochTime.getTime();
  ////////////////////////////////
  return (
    <div>
      <h1>
        Time left till year 2222, month 2, day 2,
        <br /> hours 2, minutes 2, seconds 2, milliseconds 2
      </h1>
      <div className="countdown-timer">
        <span>{remainingTime.days}</span>
        <span>days</span>
        <span>{remainingTime.hours}</span>
        <span>hours</span>
        <span>{remainingTime.minutes}</span>
        <span>minutes</span>
        <span>{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
