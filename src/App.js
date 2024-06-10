import './App.css';
import './ToDoList.js'
import React, { useState } from 'react';

import Header from './header.js'
import Footer from './footer.js'
import Counter from './counter'
import AllToDos from './ToDoList.js';'./ToDoList.js'

function App() {
  const [counters, btnClick] = useState(0)
  const [inputVal, setter] = useState([])

  const handleChange = (event) => {
    setter(event.target.value);
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${inputVal}`);

    // You can also perform other actions here, such as sending the input value to a server
  };

  return (
    <div className="App">



      

      <form onSubmit={handleSubmit}>
            <label>
              input:
              <input type='text' value={inputVal} onChange={handleChange}></input>
            </label>
      </form>
      
      

      <Header />

      <AllToDos newTask='Call with Sean'/>

      <Counter 
        count = {counters}
        clickBtn = {btnClick}
      
      />

      <Footer />
      
    </div>
  );
}

export default App;
