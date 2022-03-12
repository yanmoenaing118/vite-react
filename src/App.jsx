import { useState } from "react";
import Arrow1 from "./arrows/arrow-1";
import Arrow1a from "./arrows/arrow-1a";
import Arrow2 from "./arrows/arrow-2";
import Arrow2a from "./arrows/arrow-2a";
import Arrow3 from "./arrows/arrow-3";
import Arrow3a from "./arrows/arrow-3a";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          position: "relative",
        }}
      >
        <div>
          <Arrow1Group />
        </div>
        <div>
          <Arrow2Group />
        </div>
        <div>
          <Arrow3Group />
        </div>
      </div>
    </div>
  );
}

function Arrow1Group() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div id="arrow1" style={{ position: "absolute" }}>
        <Arrow1 />
      </div>
      <div id="arrow1a" style={{ position: "absolute" }}>
        <Arrow1a />
      </div>
    </div>
  );
}

function Arrow2Group() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div id="arrow2" style={{ position: "absolute" }}>
        <Arrow2 />
      </div>
      <div id="arrow2a" style={{ position: "absolute" }}>
        <Arrow2a />
      </div>
    </div>
  );
}

function Arrow3Group() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div id="arrow3" style={{ position: "absolute" }}>
        <Arrow3 />
      </div>
      <div id="arrow3a" style={{ position: "absolute" }}>
        <Arrow3a />
      </div>
    </div>
  );
}

export default App;
