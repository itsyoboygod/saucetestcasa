import React, { useEffect, useState } from "react";

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
      // const [timerComponents, setTimerComponents] = useState([]);

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
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5%"}}>
      <h1>HacktoberFest {year} Countdown</h1>
      <h2>With React Hooks!</h2>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
    </div>
  );
}

export default TestTime;


// import React, { Components, useState, useEffect } from 'react';
// import Modalclock from './ModalClock'
// import { Component } from 'react';
// import './style.css';


// export default function CountdownClock() {


//     const [YY, setYear] =  useState(2021);
//     const [MM, setMonth] = useState(12);
//     const [DD, setDays] =  useState(31);
//     const [HH, setHours] = useState(23);
//     const [MI, setMinutes] = useState(59);
//     const [SS, setSeconds] = useState(59);

//     // useEffect(() => {
//         const [now, setNow] = useState(new Date());
//         const [eventDate, seteventDate] = useState(new Date(YY, MM - 1, DD, HH, MI, SS));

//         const [currentTime, setcurrentTime] = useState(now.getTime());
//         const [eventTime, seteventTime] = useState(eventDate.getTime());

//         const [remTime, setremTime] = useState(eventTime - currentTime);

//         var [s, setS] = useState(Math.floor(remTime / 1000));
//         var [m, setM] = useState(Math.floor(s / 60));
//         var [h, setH] = useState(Math.floor(m / 60));
//         var [d, setD] = useState(Math.floor(h / 24));

//         h %= 24;
//         m %= 60;
//         s %= 60;

//         d = d + "";
//         h = (h < 10) ? "0" + h + "" : h;
//         m = (m < 10) ? "0" + m : m + "";
//         s = (s < 10) ? "0" + s : s;


//         // setTimeout(this.countdown(), 1000);





//     function adicionarDia() {
//         setD(prevCount => prevCount +1)
//     }


//     return (
//         <div>

//             <div className="content-clock">
//                 <table className="countdowncontainer">
//                     <tr class="info-title">
//                         <td colspan="4" id="neweventtitle">Countdown Clock</td>
//                         <Modalclock/>
//                     </tr>
//                     <tr className="info-time">
//                         <td id="days">{d}</td>
//                         <td className="dots-time">:</td>
//                         <td id="hours">{h}</td>
//                         <td className="dots-time">:</td>
//                         <td id="minutes">{m}</td>
//                         <td className="dots-time">:</td>
//                         <td id="seconds">{s}</td>
//                     </tr>
//                     <tr className="info-time-name">
//                         <td id="td-day-name">Days</td>
//                         <td id="td-hrs-name">Hours</td>
//                         <td id="td-min-name">Minutes</td>
//                         <td id="td-sec-name">Seconds</td>

//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>

//                         <button onClick={adicionarDia}>Adicionar dia</button>
//                     </tr>
//                     <tr><td><span id="contador"></span></td></tr>
//                 </table>
//             </div>

//         </div>


//     );



// <>
//      {/* function countdown() {

//          var YY = 2021;
//          var MM = 12;
//          var DD = 31;
//          var HH = 23;
//          var MI = 59;
//          var SS = 59;

//          var now = new Date();
//          var eventDate = new Date(YY, MM - 1, DD, HH, MI, SS);

//          var currentTime = now.getTime();
//          var eventTime = eventDate.getTime();

//          var remTime = eventTime - currentTime;

//          var s = Math.floor(remTime / 1000);
//          var m = Math.floor(s / 60);
//          var h = Math.floor(m / 60);
//          var d = Math.floor(h / 24);

//          h %= 24;
//          m %= 60;
//          s %= 60;

//          d = d + "";
//          h = (h < 10) ? "0" + h + "" : h;
//          m = (m < 10) ? "0" + m : m + "";
//          s = (s < 10) ? "0" + s : s;

//          document.getElementById("days").textContent = d;
//          setDays(d)
//          document.getElementById("days").innerText = d;

//          document.getElementById("hours").textContent = h;
//          document.getElementById("minutes").textContent = m;
//          document.getElementById("seconds").textContent = s;

//          setTimeout(countdown, 1000);



//      } */}
// </>


// }


