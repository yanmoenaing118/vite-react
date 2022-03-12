import { useState } from "react";
import Arrow1 from "./arrows/arrow-1";
import Arrow1a from "./arrows/arrow-1a";
import Arrow2 from "./arrows/arrow-2";
import Arrow2a from "./arrows/arrow-2a";
import Arrow3 from "./arrows/arrow-3";
import Arrow3a from "./arrows/arrow-3a";
import Arrow4 from "./arrows/arrow-4";
import Arrow4a from "./arrows/arrow-4a";
import Arrow5 from "./arrows/arrow-5";
import Arrow5a from "./arrows/arrow-5a";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <div className="long-curve">
          <Arrow1Group />
        </div>
        <div className="texts">
          <p className="understand">understand</p>
          <p className="analyse">analyse</p>
        </div>

        <div className="straight">
          <div className="straight1">
            <Arrow3Group />
          </div>
          <div className="straight2">
            <Arrow2Group />
          </div>
        </div>

        <div className="texts">
          <p className="deliberate">deliberate</p>
          <p className="execute">execute</p>
        </div>
        <div className="curves">
          <div className="curve1">
            <Arrow4Group />
          </div>
          <p className="create">create</p>
          <div className="curve2">
            <Arrow5Group />
          </div>
        </div>
      </div>
      <style jsx>{`
        .grid {
          max-width: 680px;
          margin: 0 auto;
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: 234px;

        }

        p {
          font-weight: bold;
          font-size: 1rem;
          text-transform: uppercase;
        }
        .texts {
          height: 100%;
          position: relative;
        }

        .understand {
          position: absolute;
          top: 0;
        }

        .analyse {
          position: absolute;
          bottom: -8px;
        }

        .straight {
          position: relative;
        }

        .straight1 {
          position: absolute;
          top: 0;
        }

        .straight2 {
          position: absolute;
          bottom: 12px;
          left: -45px;
        }

        .deliberate {
          position: absolute;
          left: -40px;
        }

        .execute {
          position: absolute;
          bottom: -8px;
        }

        .curves {
          position: relative;
        }

        .curve1 {
          position: absolute;
          top: 10px;
          left: -52px;
        }

        .create{
          position: absolute;
          top: 50%;
          transform: translate(50%,-50%);
        }
        .curve2 {
          position: absolute;
          bottom: 95px;
          left: -50px;
        }
      `}</style>
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

function Arrow4Group() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div id="arrow4" style={{ position: "absolute" }}>
        <Arrow4 />
      </div>
      <div id="arrow4a" style={{ position: "absolute" }}>
        <Arrow4a />
      </div>
    </div>
  );
}

function Arrow5Group() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div id="arrow5" style={{ position: "absolute" }}>
        <Arrow5 />
      </div>
      <div id="arrow5a" style={{ position: "absolute" }}>
        <Arrow5a />
      </div>
    </div>
  );
}

export default App;
