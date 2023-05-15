import { useState } from "react";
import "./App.css";
import TextCarousel from "./TextCarousel/TextCarousel";

const display: [String[], String[], String[], String[]] = [
  ["javascript", "python", "sql", "c++", "ruby", "html", "css"],
  [
    "full-stack",
    "front-end",
    "back-end",
    "react",
    "node",
    "next13",
    "sinatra",
    "firebase",
  ],
  ["oauth", "rest api", "jwt authentication", "seo", "ssr", "cloud computing"],
  [
    "heroku",
    "netlify",
    "docker",
    "mysql",
    "t-sql",
    "nosql",
    "relational data modeling",
  ],
];

const durations: [number, number, number, number] = [2000, 1700, 2100, 1900];

function App() {
  const [color, setColor] = useState<string>();
  return (
    <div className="App">
      <header className="landing" style={{ backgroundColor: color }}>
        <TextCarousel durations={durations} display={display} />
        <h1>Welcome to a test!</h1>
      </header>
      <div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
