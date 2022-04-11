import './App.css';
import Mensaje from "./Mensaje.js"

const Description = () => {
  return <p>app components</p>
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

export default App;
