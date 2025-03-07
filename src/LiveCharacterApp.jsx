import { useEffect, useState } from "react";

const LiveCharacterApp = () => {
  const [totalChar, setTotalChar] = useState(0);
  const [percentage, setPercentage] = useState("0");

  const handleChange = (e) => {
    setTotalChar(e.target.value.length);
  };

  useEffect(() => {
    setPercentage(String(Math.round((totalChar / 80) * 100)));
  }, [totalChar]);

  return (
    <div className="flex min-h-dvh justify-center items-center">
      <div className="flex flex-col max-w-lg w-full px-4">
        <input
          onChange={handleChange}
          type="text"
          maxLength={80}
          placeholder={"Type your text..."}
          className={`py-3 border-b-2 border-gray-300  outline-none w-full md:mx-auto text-lg transition-colors duration-300 ease-in-out ${totalChar === 80 ? "focus:border-red-500" : "focus:border-teal-600"}`}
        />
        <div className="flex flex-row pt-2 w-full justify-between items-center">
          <div className="h-4 w-1/2 rounded-full border-1 border-gray-300 overflow-hidden">
            <span
              className="h-full block"
              style={{
                backgroundColor:
                  percentage <= 20
                    ? "#14B8A6"
                    : percentage <= 40
                      ? "#0D9488"
                      : percentage <= 60
                        ? "#FFB433"
                        : percentage <= 80
                          ? "#FF7F00"
                          : percentage <= 100
                            ? "#FF0000"
                            : "",
                width: `${percentage}%`,
                transition:
                  "width 0.1s ease, background-color 0.3s ease-in-out",
              }}
            ></span>
          </div>
          <p
            className={`text-gray-400 text-md ${totalChar === 80 ? "text-red-500" : ""}`}
          >
            {totalChar}/80
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveCharacterApp;
