import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BirthdayCard from "./components/Birthday";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BirthdayCard />
    </>
  );
}

export default App;
