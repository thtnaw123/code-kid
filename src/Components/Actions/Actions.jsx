import React from "react";
import "./actions.css";
const Actions = ({ Color, colorType, moveBall, turn, dropBox }) => {
  return (
    <>
      <div className="actionsSpace">
        <button
          onClick={() => {
            Color("color");
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
        <button
          onClick={() => {
            moveBall();
          }}
        >
          Move
        </button>
        <button
          onClick={() => {
            turn();
          }}
        >
          turn left
        </button>
        <button
          onClick={() => {
            dropBox();
          }}
        >
          dropBox
        </button>
      </div>
    </>
  );
};

export default Actions;
