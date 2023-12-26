import React, { useState } from "react";

const ColorChange = () => {
  const [typeofColor, settypeofColor] = useState("hex");
  const [Color, setColor] = useState(null);

  const handleRandomes = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handelhexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let val = "#";

    for (let i = 0; i < 6; i++) {
      val += hex[handleRandomes(hex.length)];
    }

    setColor(val);
  };

  const handelrgbColor = () => {
    let r = handleRandomes(256);
    let g = handleRandomes(256);
    let b = handleRandomes(256);

    setColor(`rgb(${r},${g},${b})`)
  };

  return (
    <div
      className={` w-full h-screen text-center relative`}
      style={{
        backgroundColor: Color,
      }}
    >
      <button
        onClick={() => settypeofColor("hex")}
        className="px-4 py-2 border border-neutral-950 bg-white rounded-sm cursor-pointer text-black font-serif font-bold"
      >
        For HEX
      </button>
      <button
        onClick={() => settypeofColor("rgb")}
        className="px-4 py-2 border border-neutral-950 bg-white rounded-sm cursor-pointer  text-black font-serif font-bold mx-5"
      >
        For RGB
      </button>
      <button
        onClick={typeofColor === "hex" ? handelhexColor : handelrgbColor}
        className="px-4 py-2 border border-neutral-950 bg-white rounded-sm cursor-pointer  text-black font-serif font-bold"
      >
        Create Randome Color
      </button>



      <div className="absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] text text-5xl font-bold"><h1>{typeofColor}--{Color}</h1></div>
    </div>




  );
};

export default ColorChange;
