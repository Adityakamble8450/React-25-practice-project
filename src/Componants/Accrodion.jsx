import React, { useState } from "react";
import Data from "./Data";

const Accrodion = () => {
  const [selected, setselected] = useState(null);
  const [multisection, setmultisection] = useState(false);
  const [color, setcolor] = useState(false);
  const [main, setmain] = useState([]);

  const showselected = (selectedID) => {
    setselected(selectedID === selected ? null : selectedID);
  };

  const handlelmulitiselectuon = (slelectID) => {
    let copymain = [...main];
    const finbdcurruntID = copymain.indexOf(slelectID);
    console.log(finbdcurruntID)
  };

  const handleselection = () => {
    setmultisection(!multisection);
    setcolor(!color);
  };

  return (
    <div className="flex flex-col  justify-center items-center mt-3 h-[100vh] w-[100vw]  ">
      <div className="wrapper text-center w-[500px]  ">
        <button
          onClick={handleselection}
          className={`py-2 px-4 border rounded ${
            color ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {color ? "Diseble multiselection" : "Enable multiselection"}
        </button>
        {Data && Data.length > 0
          ? Data.map((items) => (
              <>
                <div
                  onClick={
                    multisection
                      ? () => handlelmulitiselectuon(items.id)
                      : () => showselected(items.id)
                  }
                  className="mt-3 font-bold text-2xl cursor-pointer flex gap-2  bg-green-500 p-3 "
                >
                  {items.question}
                  <span>+</span>
                </div>

                {selected === items.id ? (
                  <div className="text-black-600">{items.answer}</div>
                ) : null}
              </>
            ))
          : null}
      </div>
    </div>
  );
};

export default Accrodion;
