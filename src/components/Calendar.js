import React, { useEffect, useState } from "react";
import classes from "./Calendar.module.css";

const Calendar = ({ date, onChange }) => {
  const startOfCalendar = date.clone().startOf("month").startOf("week");
  const endOfCalendar = date.clone().endOf("month").endOf("week");
  const [calendar, setCalendar] = useState([]);
  const dayName = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    const abhi = [];
    const tempDate = startOfCalendar.clone().subtract(1, "day");

    while (tempDate.isBefore(endOfCalendar, "day")) {
      abhi.push(
        Array(7)
          .fill(0)
          .map(() => tempDate.add(1, "day").clone())
      );
    }
    setCalendar(abhi);
  }, [date]);

  return (
    <div className={classes.calendar}>
      <div className={classes.header}>
        <div className={classes.previous}>{String.fromCharCode(171)}</div>
        <div className={classes.current}>
          {date.format("MMMM")} {date.format("YYYY")}
        </div>
        <div className={classes.next}>{String.fromCharCode(187)}</div>
      </div>
      <div className={classes.body}>
        <div className={classes["day-names"]}>
          {dayName.map((name, index) => (
            <div className={classes.week} key={index}>
              {name}
            </div>
          ))}
        </div>
        {calendar.map((week, index) => (
          <div key={index}>
            {week.map((day, index) => (
              <div
                className={classes.day}
                onClick={() => onChange(day)}
                key={index}
              >
                <div
                  className={date.isSame(day, "day") ? classes.selected : ""}
                >
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
