import './App.css';
import {useState} from 'react'

function App() {

  const [celcius,setCelcius] = useState('')
  const [fahrenheit, setFahrenheit]= useState('')

  const handleCelciusChange = (e) => {
    const newCelcius = e.target.value
    setCelcius(newCelcius)
    setFahrenheit((newCelcius * 9/5 ) + 32)

  }

  return (
    <div className="App">
      
      <h1>Temperature Converter</h1>

      Celcius: <input type='number' 
        value={celcius} 
        onChange={handleCelciusChange}
        style={{border: '1px solid #ccc'}}
        />
          <br/><br/>
      Farenheit: <input type='text' 
      value={fahrenheit} 
      readOnly 
      style={{border: '1px solid #ccc'}}
      />

      <p>{celcius}C</p>
      <p>{fahrenheit}f</p>
    </div>
  );
}

export default App;
