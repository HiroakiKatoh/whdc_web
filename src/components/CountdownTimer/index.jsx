import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const calculateTimeLeft = () => {
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "09/30/",
          birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }

      const countDown = new Date(birthday).getTime();
      const now = new Date().getTime();
      const distance = countDown - now;

      setTimeLeft({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="row align-items-center justify-content-around w-100 layout-1">
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
        <div id="countdown" className="countdown">
          <ul>
            <li className="class-list-1">
              <span>{timeLeft.days}</span>
              Days
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
        <div id="countdown-3" className="countdown">
          <ul>
            <li className="class-list-1">
              <span>{timeLeft.hours}</span>
              Hours
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
        <div id="countdown-1" className="countdown">
          <ul>
            <li className="class-list-1">
              <span>{timeLeft.minutes}</span>
              Minutes
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
        <div id="countdown-2" className="countdown">
          <ul>
            <li className="class-list-1">
              <span>{timeLeft.seconds}</span>
              Seconds
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 