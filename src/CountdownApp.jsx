import Timer from "./components/countdown-components/Timer.jsx";
import Button from "./components/countdown-components/Button.jsx";
import { useEffect, useState } from "react";

const CountdownApp = () => {
  const initialState = 600;
  const [totalSeconds, setTotalSeconds] = useState(initialState);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    if (totalSeconds !== initialState) {
      setPause(!pause);
    }
  };

  const handleReset = () => {
    setTotalSeconds(initialState);
    setStart(false);
    setPause(false);
  };

  useEffect(() => {
    if (totalSeconds === 0 || !start) return;
    const minTotalSeconds = setInterval(() => {
      setTotalSeconds((prevState) => {
        if (pause) {
          return prevState;
        } else {
          return prevState - 1;
        }
      });
    }, 1000);

    return () => clearInterval(minTotalSeconds);
  }, [start, pause, totalSeconds]);

  return (
    <div className="min-h-dvh max-w-full flex flex-col justify-center items-center">
      <div className="border-1 flex flex-col p-2 md:p-6 border-gray-200 rounded-lg items-center">
        <Timer totalSeconds={totalSeconds} />

        <div className="flex flex-row gap-4 w-full">
          <Button
            typeEvent={handleStart}
            color="#00263B"
            type="Start"
            start={start}
          />
          <Button
            typeEvent={handlePause}
            color="#00A1AB"
            type="Pause"
            pause={pause}
          />
          <Button typeEvent={handleReset} color="#9A1F40" type="Reset" />
        </div>
      </div>
    </div>
  );
};

export default CountdownApp;
