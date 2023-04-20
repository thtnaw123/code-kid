import { useState } from "react";
import "./App.css";
import { Actions, Animationspace, Buttons, Codespace } from "./Components";
import { Engine } from "./Engine/Engine";

function App() {
  const [inputObj, setInputObj] = useState([
    { color: { id: 1, value: "", functionName: "" } },
  ]);
  const [outPutObj, setOutPutObj] = useState([]);

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
      newArray[0].color.value = text;
      setInputObj(newArray);
    } else {
      return;
    }
  };

  //parse the exection code using the Engine
  const parseCode = (data) => {
    const EngineOutPut = Engine(data);
    const newArray = [...outPutObj];
    newArray.push(EngineOutPut[0]);
    setOutPutObj(newArray);
  };

  //Reste the code
  const resteCode = () => {
    const newArray = [{ color: { id: 1, value: "", functionName: "" } }];
    setInputObj(newArray);
  };
  return (
    <>
      <div className="game-page-container">
        <div className="Buttons-Codespace--Actions">
          <div className="Buttons-Codespace">
            <Codespace inputObj={inputObj} />
            <Buttons
              inputObj={inputObj}
              parseCode={parseCode}
              resteCode={resteCode}
            />
          </div>
          <Actions Color={Color} colorType={colorType} />
        </div>
        <Animationspace parseCode={parseCode} inputObj={inputObj} />
      </div>
    </>
  );
}

export default App;
