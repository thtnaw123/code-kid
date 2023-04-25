import React, { useEffect, useRef } from "react";
import "./animationSpace.css";
import { BallMovement } from "../../Utils/Ball";
import img2 from "../../assets/img2.png";
import { DropBox } from "../../Utils/Box";
import WallCollision from "../../Utils/WallCollision";

const Animationspace = ({ outPutObj }) => {
  const runCanvaRef = useRef(null);
  const exampleCanvaRef = useRef(null);

  //variables
  let mode = ["straight", "up", "back", "down"];
  let objVar = { x: 100, y: 100, dx: 50, dy: 50 };
  let color = "blue";

  let m = 0;
  let i = 0;
  while (i < outPutObj.length) {
    if (outPutObj[i].name == "move") {
      console.log(`mode: ${mode[m]}`);
      console.log(`x: ${objVar.x}`);
      console.log(`y: ${objVar.y}`);
      switch (mode[m]) {
        case "straight":
          objVar.x += objVar.dx;
          break;
        case "up":
          objVar.y -= objVar.dy;
          break;
        case "down":
          objVar.y += objVar.dy;
          break;
        case "back":
          objVar.x -= objVar.dx;
          break;
        default:
          break;
      }
    } else if (outPutObj[i].name === "color") {
      color = outPutObj[i].value;
    } else if (outPutObj[i].name === "turn") {
      if (m === 3) {
        m = 0;
      } else {
        m++;
      }
    }
    WallCollision(objVar, mode[m]);
    i++;
  }
  //Exection canvas
  useEffect(() => {
    const render = () => {
      const canvas = runCanvaRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const image = new Image();
      image.src = img2;
      ctx.drawImage(image, 0, 0, 600, 400);
      //Map throught output state
      const index = outPutObj.length - 1;
      if (index >= 0) {
        BallMovement(ctx, objVar.x, objVar.y, color, 20);
        //DropBox(ctx, objVar.x, objVar.y, "blue");
      } else {
        BallMovement(ctx, objVar.x, objVar.y, "blue", 20);
      }
      requestAnimationFrame(render);
    };
    render();
  }, [outPutObj]);

  //Example canvas
  useEffect(() => {
    const render = () => {
      const canvas = exampleCanvaRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const image = new Image();
      image.src = img2;
      ctx.drawImage(image, 0, 0, 600, 400);
      BallMovement(ctx, 100, 100, "blue", 20);
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return (
    <>
      <div className="animationSpace">
        <div className="result-animation">
          <canvas
            className="run"
            ref={runCanvaRef}
            width="600px"
            height="400px"
          ></canvas>
        </div>
        <div className="example-animation">
          <canvas
            className="example"
            ref={exampleCanvaRef}
            width="600px"
            height="400px"
          ></canvas>
        </div>
      </div>
    </>
  );
};

export default Animationspace;
