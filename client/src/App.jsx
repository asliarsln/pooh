///componentt

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import pooh from "./assets/pooh.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href={pooh} target="_blank">
          <img src={pooh} className="logo" alt="Pooh" />
        </a>
      </div>
      <div className="card">
        {/*
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br></br>
      */}
        <label>
          <h3>Yaşadığınız sorunu yazınız</h3> <br></br>
          <textarea name="postContent" rows={4} cols={40} />
        </label>
        <br />
        <button>Gönder</button> {/* Buton */}
      </div>

      <p className="read-the-docs">Avukat Öneri Sistemi</p>
    </>
  );
}

export default App;
