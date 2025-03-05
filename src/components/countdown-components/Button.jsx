const Button = ({ color, type, typeEvent, pause, start }) => {
  return (
    <button
      onClick={typeEvent}
      className={`px-6 py-2 text-white w-full text-md md:text-lg rounded-md cursor-pointer hover:brightness-110`}
      style={{
        background: type === "Start" ? (start ? "gray" : color) : color,
      }}
    >
      {pause ? "Resume" : type}
    </button>
  );
};

export default Button;
