import "./App.css";
import { Actions, Animationspace, Buttons, Codespace } from "./Components";

function App() {
  return (
    <>
      <div className="game-page-container">
        <div className="Buttons-Codespace--Actions">
          <div className="Buttons-Codespace">
            <Codespace />
            <Buttons />
          </div>
          <Actions />
        </div>
        <Animationspace />
      </div>
    </>
  );
}

export default App;
