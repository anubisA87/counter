import './App.css';
import { useState } from "react";
//import Mensaje from "./Mensaje.js"

const Counter = ({number}) => {
  return <h1>{number}</h1>
}
/*
const Counter = (props) => {
  return <h1>{props.number}</h1>
}
*/

const App = (props) => {
  const [contador, setContador] = useState(0);
  

  //Buttons

    //Incrementar
  const handleClick = () => {
    setContador(contador + 1);
  }
    //Decrementar
    const handleClick2 = () => {
      setContador(contador - 1)
    }

    //Reset
  const handleClickReset = () => {
    setContador(0)
  }


  //is even or odd
  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";


  //return
  return (
    <div>
      <Counter number={contador} />
      <p>
        {mensajePar}
      </p>
      <button onClick={handleClick}>
        Incrementar
      </button>
      <button onClick={handleClick2}>
        Decrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
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
