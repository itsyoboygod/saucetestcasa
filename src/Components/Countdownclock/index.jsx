import React, { useEffect, useState } from "react";
import Modalclock from "./ModalClock";
import './style.css'

function TestTime(){

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    //   const [timerComponents, setTimerComponents] = useState([]);

useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="section-content-clock">

        <div className="content-clock">
            <table className="countdowncontainer">
                <tr class="info-title">
                    <td colspan="4" id="neweventtitle">HacktoberFest {year} Countdown</td>
                    <Modalclock/>
                </tr>
                <tr className="info-time">
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </tr>
                <tr className="info-time-name">
                    <td id="td-day-name">Days</td>
                    <td id="td-hrs-name">Hours</td>
                    <td id="td-min-name">Minutes</td>
                    <td id="td-sec-name">Seconds</td>

                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>

                    <button>Adicionar dia</button>
                </tr>
                <tr><td><span id="contador"></span></td></tr>
            </table>
        </div>

    </div>


);
}




export default TestTime;