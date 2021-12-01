import dayjs from "dayjs";
//
//
////////////////
export function CountdownUtils(timestampsMs) {
  //
  const timestampsDayjs = dayjs(timestampsMs);
  const nowDayjs = dayjs();

  //
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampsDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampsDayjs),
    hours: getRemainingHours(nowDayjs, timestampsDayjs),
    days: getRemainingDays(nowDayjs, timestampsDayjs),
  };
}
function getRemainingSeconds(nowDayjs, timestampsDayjs) {
  const seconds = timestampsDayjs.diff(nowDayjs, "seconds") % 60;
  return seconds;
}

function getRemainingMinutes(nowDayjs, timestampsDayjs) {
  const minutes = timestampsDayjs.diff(nowDayjs, "minutes") % 60;
  return minutes;
}

function getRemainingHours(nowDayjs, timestampsDayjs) {
  const hours = timestampsDayjs.diff(nowDayjs, "hours") % 24;
  return hours;
}

function getRemainingDays(nowDayjs, timestampsDayjs) {
  const days = timestampsDayjs.diff(nowDayjs, "days");
  return days;
}
