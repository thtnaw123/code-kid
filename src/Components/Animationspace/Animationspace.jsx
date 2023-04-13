import React, { useEffect, useRef } from "react";
import "./animationSpace.css";

const Animationspace = () => {
  const runCanvaRef = useRef(null);
  const exampleCanvaRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = runCanvaRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(render);
    };
    render();
  }, []);
  useEffect(() => {
    const render = () => {
      const canvas = exampleCanvaRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
          />
        </div>
        <div className="example-animation">
          <canvas
            className="example"
            ref={exampleCanvaRef}
            width="600px"
            height="400px"
          />
        </div>
      </div>
    </>
  );
};

export default Animationspace;
