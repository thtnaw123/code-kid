import React from "react";
import "./codespace.css";

const Codespace = ({ inputObj }) => {
  return (
    <div className="codeSpace">
      {inputObj.map((item) => (
        <h3 key={item.id}>
          {item.functionName}
          {item.functionName ? "(" : ""} {item.value}{" "}
          {item.functionName ? ")" : ""}
        </h3>
      ))}
    </div>
  );
};

export default Codespace;
