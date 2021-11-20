import React, { useState, useEffect } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  console.log(currentTime);

  return <div>The current time is {currentTime}.</div>;
}

export default Time;
