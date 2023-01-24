import "./App.css";
import TextCarousel from "./TextCarousel/TextCarousel";

const display: [String[], String[], String[], String[]] = [
  ["TEST1", "TEST2", "TEST3", "TEST4", "TEST5", "TEST6"],
  ["TEST1", "TEST2", "TEST3", "TEST4", "TEST5", "TEST6"],
  ["TEST1", "TEST2", "TEST3", "TEST4", "TEST5", "TEST6"],
  ["TEST1", "TEST2", "TEST3", "TEST4", "TEST5", "TEST6"],
];

const durations = [1000, 1100, 900, 800];

function App() {
  return (
    <div className="App">
      <TextCarousel display={display} />
      <TextCarousel duration={2000} display={display} />
      <TextCarousel durations={[100, 1000, 800, 2000]} display={display} />
    </div>
  );
}

export default App;
