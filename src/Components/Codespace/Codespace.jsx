import React from "react";
import "./codespace.css";

const Codespace = ({ inputObj }) => {
  return (
    <div className="codeSpace">
      {inputObj.map((item) => (
        <h3>
          {item.color.functionName}
          {item.color.functionName ? "(" : ""} {item.color.value}{" "}
          {item.color.functionName ? ")" : ""}
        </h3>
      ))}
    </div>
  );
};

export default Codespace;
