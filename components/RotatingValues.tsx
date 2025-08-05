"use client";
import React, { useEffect, useState } from "react";

const RotatingValues = () => {
  const values = ["ENTHUSIASM", "CLIENT FIRST", "INNOVATION"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log("Current index:", index, "Value:", values[index]);
  }, [index]);

  return (
    <div>
      <span className="font-bold text-4xl text-sky-400">{values[index]}</span>
    </div>
  );
};

export default RotatingValues;
