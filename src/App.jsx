
import { useState } from 'react';
import './App.css'

function App() {
  let count = 0;
  let [counter,setcounter] = useState(0);
  console.log({counter,setcounter});
  function handClick(){
    setcounter(counter+1);
    // count = count + 1;
    // console.log('count',count); 
  }
  console.log("App component rendered");
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={handClick}>Increment</button>
    </div>
  )
}

export default App
