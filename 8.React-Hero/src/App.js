import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [height,setHeight] = useState(0)
  const [superpower,setSuperPower] = useState('')
  const [displaycharacter, setDisplayCharacter] = useState(false)
 
  return (
    <div className="App">
      <h1>Build A hero</h1>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" style={{margin:10}} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="">Age</label>
        <input type="number" name="age" id="age" style={{margin:10}} onChange={(e)=>setAge(e.target.value)}/>
        <label htmlFor="">Height</label>
        <input type="number" name="height" id="height" style={{margin:10}} onChange={(e)=>setHeight(e.target.value)}/>
        <label htmlFor="">SuperPower</label>
        <input type="text" name="superpower" id="superpower" style={{margin:10}} onChange={(e)=>setSuperPower(e.target.value)}/>
      </div>
      <button onClick={()=> setDisplayCharacter(true)}>Display Character</button>
      <div>
        <h1>Hero Info</h1>
        {displaycharacter &&
          <ul>
            <li>Name : {name}</li>
            <li>Age : {age}</li>
            <li>Height : {height}</li>
            <li>Superpower : {superpower}</li>
          </ul>
        }
      </div>
    </div>
    
  );
}

export default App;
