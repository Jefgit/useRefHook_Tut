import { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const increment = () => {
    setTimer((prevTime) => prevTime + 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(increment, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer- {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook timer
      </button>
    </div>
  );
};

export default HookTimer;
