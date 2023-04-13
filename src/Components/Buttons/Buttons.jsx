import React from "react";
import "./buttons.css";

const Buttons = ({ inputObj, parseCode, run, setRun }) => {
  return (
    <div className="Buttons">
      <div className="Run_code">
        <button
          onClick={() => {
            parseCode(inputObj);
          }}
        >
          Run
        </button>
      </div>

      <div className="Reset_Code">
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Buttons;
