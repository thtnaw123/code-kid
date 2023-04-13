import { useState } from "react";
import "./App.css";
import { Actions, Animationspace, Buttons, Codespace } from "./Components";

function App() {
  const [inputObj, setInputObj] = useState([
    { color: { id: 1, color: "", functionName: "" } },
  ]);
  const [outputObj, setOutputObj] = useState([]);
  //Action color() funtion
  const Color = (text) => {
    const newArray = [...inputObj];
    newArray[0].color.functionName = text;
    setInputObj(newArray);
  };
  //Action color type
  const colorType = (text) => {
    //check if there is a funtion name
    if (inputObj[0].color.functionName) {
      const newArray = [...inputObj];
      newArray[0].color.color = text;
      setInputObj(newArray);
    } else {
      return;
    }
  };
  return (
    <>
      <div className="game-page-container">
        <div className="Buttons-Codespace--Actions">
          <div className="Buttons-Codespace">
            <Codespace inputObj={inputObj} />
            <Buttons />
          </div>
          <Actions Color={Color} colorType={colorType} />
        </div>
        <Animationspace />
      </div>
    </>
  );
}

export default App;
