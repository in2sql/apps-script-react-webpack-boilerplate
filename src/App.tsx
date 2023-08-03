import { useState } from "react";
import "./App.scss";
import ReactLogo from "./react.svg";
import clsx from "clsx";

import s from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={clsx("App", s.app)}>
      <h1>Webpack + React</h1>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <ReactLogo />
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Webpack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
