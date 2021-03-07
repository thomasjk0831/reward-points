import React, { useState, useEffect } from "react";
import usersData from "../data/usersData";
import monthsData from "../data/monthsData";

function Points(props) {
  const [ptsCurrentMonth, setPtsCurrentMonth] = useState(null);
  const [pts2ndToLastMonth, setPts2ndToLastMonth] = useState(null);
  const [ptsLastMonth, setPtsLastMonth] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    function getPoints() {
      let tempPtsCurrent = 0;
      let tempPts2ndToLast = 0;
      let tempPtsLast = 0;

      //loop through each item in purchases array and update points per month for current user
      props.purchases.map((item) => {
        if (item.user !== props.user) return;
        else {
          if (currentMonth === item.month) {
            tempPtsCurrent += calculatePoints(item.amount);
          } else if (currentMonth - 1 === item.month) {
            tempPts2ndToLast += calculatePoints(item.amount);
          } else if (currentMonth - 2 === item.month) {
            tempPtsLast += calculatePoints(item.amount);
            //for edge cases where months are 1 or 2
          } else if (currentMonth - 1 < 1 && currentMonth + 11 === item.month) {
            tempPts2ndToLast += calculatePoints(item.amount);
          } else if (currentMonth - 2 < 1 && currentMonth + 10 === item.month) {
            tempPtsLast += calculatePoints(item.amount);
          }
          return;
        }
      });

      setPtsCurrentMonth(tempPtsCurrent);
      setPts2ndToLastMonth(tempPts2ndToLast);
      setPtsLastMonth(tempPtsLast);
    }

    getPoints();
  }, []);

  function calculatePoints(amount) {
    let points = 0;
    amount = Math.floor(amount);

    if (amount > 100) {
      points += (amount - 100) * 2;
      amount = 100;
    }
    if (amount > 50 && amount <= 100) {
      points += amount - 50;
      amount = 50;
    }
    if (amount <= 50) {
      return points;
    }
  }

  return (
    <div className="points-wrapper">
      <div>
        <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
      </div>
      <div>
        <h3>{usersData[props.user]}</h3>

        <p>You earned {ptsCurrentMonth}pts this month...</p>
        <p>
          and {pts2ndToLastMonth}pts in{" "}
          {currentMonth - 1 < 1
            ? monthsData[currentMonth + 11]
            : monthsData[currentMonth - 1]}
          ...
        </p>

        <p>
          and {ptsLastMonth}pts in{" "}
          {currentMonth - 2 < 1
            ? monthsData[currentMonth + 10]
            : monthsData[currentMonth - 2]}
          ...
        </p>
        <p>
          <strong>
            You earned {ptsLastMonth + pts2ndToLastMonth + ptsCurrentMonth} pts
            total!
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Points;
