const Timer = ({ totalSeconds }) => {
  return (
    <div className="mb-6 md:mb-12 flex flex-row gap-4 w-full">
      <div className="px-6 py-2 shadow-md flex flex-col w-24 md:w-full items-center h-24 justify-between">
        <p
          className="text-[#00263B] text-2xl md:text-4xl font-bold flex-1 flex items-center"
          style={{
            color:
              totalSeconds <= 300
                ? totalSeconds === 0
                  ? "#00263B"
                  : "#D8A25E"
                : "",
          }}
        >
          {String(Math.floor(totalSeconds / 3600)).padStart(2, "0")}
        </p>
        <p className="text-sm md:text-md">Hours</p>
      </div>
      <div className="px-6 py-2 shadow-md flex flex-col w-24 md:w-full items-center h-24 justify-between">
        <p
          className="text-[#00263B] text-2xl md:text-4xl  font-bold flex-1 flex items-center"
          style={{
            color:
              totalSeconds <= 300
                ? totalSeconds === 0
                  ? "#00263B"
                  : "#D8A25E"
                : "",
          }}
        >
          {String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0")}
        </p>
        <p className="text-sm md:text-md">Minutes</p>
      </div>
      <div className="px-6 py-2 shadow-md flex flex-col w-24 md:w-full items-center h-24 justify-between">
        <p
          className="text-[#00263B] text-2xl md:text-4xl font-bold flex-1 flex items-center"
          style={{
            color:
              totalSeconds <= 300
                ? totalSeconds === 0
                  ? "#00263B"
                  : "#D8A25E"
                : "",
          }}
        >
          {String(Math.floor(totalSeconds % 60)).padStart(2, "0")}
        </p>
        <p className="text-sm md:text-md">Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
