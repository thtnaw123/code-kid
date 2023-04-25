import { useState } from "react";
import "./App.css";
import { Actions, Animationspace, Buttons, Codespace } from "./Components";
import { Engine } from "./Engine/Engine";

function App() {
  const [inputObj, setInputObj] = useState([]);
  const [outPutObj, setOutPutObj] = useState([]);

  //Action color() funtion
  const Color = (text) => {
    const id = inputObj.length;
    const index = inputObj.length - 1;
    if (inputObj.length === 0) {
      const newArray = [
        ...inputObj,
        { id, hasValue: false, value: "", functionName: text },
      ];
      setInputObj(newArray);
    } else if (inputObj[index].hasValue == true) {
      const newArray = [
        ...inputObj,
        { id, hasValue: false, value: "", functionName: text },
      ];
      setInputObj(newArray);
    } else {
      return;
    }
  };

  //Action color type
  const colorType = (text) => {
    //check if there is a funtion name
    inputObj.map((item) => {
      if (!item.hasValue) {
        if (item.functionName === "color") {
          const newArray = [...inputObj];
          newArray[item.id].value = text;
          newArray[item.id].hasValue = true;
          setInputObj(newArray);
        } else {
          return;
        }
      } else {
        if (item.id === inputObj.length - 1) {
          if (item.functionName === "color") {
            const newArray = [...inputObj];
            newArray[item.id].value = text;
            newArray[item.id].hasValue = true;
            setInputObj(newArray);
          }
        }
      }
    });
  };

  //parse the exection code using the Engine
  const parseCode = (data) => {
    const EngineOutPut = Engine(data);
    const updatedArray = [...EngineOutPut];
    setOutPutObj(updatedArray);
  };
  // console.log(outPutObj);
  //Reset the code
  const resetCode = () => {
    const newInputArray = [];
    const newOutputArray = [];
    setInputObj(newInputArray);
    setOutPutObj(newOutputArray);
  };

  //move funtionalty
  const moveBall = () => {
    const id = inputObj.length;
    const index = inputObj.length - 1;
    if (inputObj.length == 0) {
      const newArray = [
        ...inputObj,
        { id, hasValue: true, functionName: "move" },
      ];
      setInputObj(newArray);
    } else if (inputObj[index].hasValue == true) {
      const newArray = [
        ...inputObj,
        { id, hasValue: true, functionName: "move" },
      ];
      setInputObj(newArray);
    } else {
      return;
    }
  };

  //console.log(outPutObj);
  //move undoCode
  const undoCode = () => {
    const newinputArray = [...inputObj];
    const newOutputArray = [...outPutObj];
    newinputArray.pop();
    newOutputArray.pop();
    setInputObj(newinputArray);
    setOutPutObj(newOutputArray);
  };

  //turn
  const turn = () => {
    const id = inputObj.length;
    const index = inputObj.length - 1;
    if (inputObj.length == 0) {
      const newArray = [
        ...inputObj,
        { id, hasValue: true, functionName: "turn" },
      ];
      setInputObj(newArray);
    } else if (inputObj[index].hasValue == true) {
      const newArray = [
        ...inputObj,
        { id, hasValue: true, functionName: "turn" },
      ];
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
            <Buttons
              inputObj={inputObj}
              parseCode={parseCode}
              resetCode={resetCode}
              undoCode={undoCode}
            />
          </div>
          <Actions
            Color={Color}
            colorType={colorType}
            moveBall={moveBall}
            turn={turn}
          />
        </div>
        <Animationspace outPutObj={outPutObj} />
      </div>
    </>
  );
}

export default App;
