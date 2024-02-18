import './App.css';
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0)

  const handleIncreament = () =>{
    setCount(count+1)
  }
 
  const handleDecreament = () =>{
    setCount(count-1)
  }
 
  return (
    <div className="App">
      
      <button onClick={handleIncreament} style={{border:'1px solid #000'}}>increase</button>
      <button onClick={handleDecreament} style={{border:'1px solid #000'}}>decrease</button>

     <p>{count} is a {count>0 ? "positive" : count<0 ? "negative":"neutral"} number.</p>
    </div>
  );
}

export default App;
