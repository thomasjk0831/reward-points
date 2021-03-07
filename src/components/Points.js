import React, { useState, useEffect } from "react";

function Points(props) {
  const [ptsCurrentMonth, setPtsCurrentMonth] = useState(null);
  const [pts2ndToLastMonth, setPts2ndToLastMonth] = useState(null);
  const [ptsLastMonth, setPtsLastMonth] = useState(null);

  useEffect(() => {
    function getPoints() {
      //gets the current month as integer
      const currentMonth = new Date().getMonth() + 1;

      let tempPtsCurrent = 0;
      let tempPts2ndToLast = 0;
      let tempPtsLast = 0;

      //loop through the purchases array and update points per month per user
      props.purchases.map((item) => {
        if (item.user !== props.user) return;
        else {
          if (currentMonth === item.month) {
            tempPtsCurrent += calculatePoints(item.amount);
          } else if (currentMonth - 1 === item.month) {
            tempPts2ndToLast += calculatePoints(item.amount);
          } else if (currentMonth - 2 === item.month) {
            tempPtsLast += calculatePoints(item.amount);
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
    <div>
      <p>{ptsCurrentMonth}</p>
      <p>{pts2ndToLastMonth}</p>
      <p>{ptsLastMonth}</p>
      <p>{ptsLastMonth + pts2ndToLastMonth + ptsCurrentMonth}</p>
    </div>
  );
}

export default Points;
