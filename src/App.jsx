import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200e"
      style={{ backgroundColor: color }}
    >
      <div
        className="rounded-2xl fixed flex flex-wrap bottom-12 justify-center px-3 inset-x-0 w-fit left-1/2 transform -translate-x-1/2"
        style={{ backgroundColor: "whitesmoke"}}
      >
        <div
          className=" rounded-2xl gap-3 justify-center flex flex-wrap px-3 py-2 "
          style={{ backgroundColor: "whitesmoke" }}
        >
          <button
            className="rounded-4xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-4xl"
            style={{ backgroundColor: "coral" }}
            onClick={() => setColor("coral")}
          >
            Coral
          </button>
          <button
            className="rounded-4xl"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-4xl"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="rounded-4xl"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="rounded-4xl"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
