import React from "react";
import "./actions.css";
const Actions = ({ Color, colorType }) => {
  return (
    <>
      <div className="actionsSpace">
        <button
          onClick={() => {
            Color("Color");
          }}
        >
          Color()
        </button>
        <button
          onClick={() => {
            colorType("blue");
          }}
        >
          blue
        </button>
        <button
          onClick={() => {
            colorType("red");
          }}
        >
          red
        </button>
      </div>
    </>
  );
};

export default Actions;
