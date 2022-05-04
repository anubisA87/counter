import React from 'react';
import './App.css';
import { useState } from 'react';
//import Mensaje from "./Mensaje.js"

const Counter = (props) => {
  return <h1>{props.number}</h1>
}

/*
const Counter = (props) => {
  return <h1>{props.number}</h1>
}
*/

const App = (props) => {
  const [counter, setCounter] = useState(0);
 
  function cleanInput() {
    document.getElementsByTagName("input")[0].value = "";
  }
  
    //Incrementar
  const handleClick = () => {
    setCounter(counter + 1);
  }
    //Decrementar
  const handleClick2 = () => {
    setCounter(counter - 1)
    }

    //Reset
  const handleClickReset = () => {
    setCounter(0)
    cleanInput()
  }

    //Input
  const handleChange = event => {
    const target = parseInt(event.target.value)
    setCounter(target)
  }

    //Clean button
  const handleClickCleanInput = () => {
    cleanInput()
  }

  //is even or odd
  const isEven = counter % 2 === 0;
  const evenMessage = isEven ? "Even" : "Odd";

  //set to 0
  if (counter === "") {
    setCounter(0);
  }

  //return
  return (
    <div class='App'>
      <header>Counter</header>
      <Counter number={counter} />
      <p>
        {evenMessage}
      </p>
      <button id="increase" onClick={handleClick}>
        Increase
      </button>
      <span>a</span>
      <button id="decrease" onClick={handleClick2}>
        Decrease
      </button>
      <div>
        <button id="reset" onClick={handleClickReset}>
          Reset
        </button>
      </div>
      <p></p>
      <div>
        <input type="number" placeholder="0" id='number' onChange={handleChange} />
        <button id="clean" onClick={handleClickCleanInput}>Clean</button>
      </div>
    </div>
  );

};








/*
const Description = () => {
  return <p>App components</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="We are working"/>
      <Mensaje color="blue" message="On a new"/>
      <Mensaje color="green" message="React project"/>
      <Description />
    </div>
  )
}
*/

export default App;
