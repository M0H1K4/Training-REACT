import React, { useState } from "react";
import "./App.css";

function App() {


  return (
    <>
    <h1>დააჭირე აბა ბოზოოოოოოოო</h1>
    <MyButton/>
    <MyButton/>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  const HandleClick = () => {
    setCount(count + 1);
  };
  return <>
    <button onClick={HandleClick}>Clicked {count} times</button>

  </>;
}

export default App;
