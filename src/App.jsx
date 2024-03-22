import React, { useState } from "react";
import "./App.css";

function App() {
function HandleClickAlert(){
  alert("What ar u doin bro");
}

  return (
    <>
    <button onClick={HandleClickAlert}>Don't click on this button</button>
    </>
  );
}


// function MyButton() {
//   const [count, setCount] = useState(0);

//   const HandleClick = () => {
//     setCount(count + 1);
//   };
//   return <>
//     <button onClick={HandleClick}>Clicked {count} times</button>

//   </>;
// }

export default App;
