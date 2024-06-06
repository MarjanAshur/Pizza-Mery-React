import React, { useState, useEffect } from "react";

function NumberCounter({ start, end, step, className }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount(count + step);
      }
    }, 7);

    return () => clearInterval(interval);
  }, [count, end, start, step]);

  return (
    <div className={`number-counter ${className}`}>
      <p>{count}</p>
    </div>
  );
}
export default NumberCounter;
