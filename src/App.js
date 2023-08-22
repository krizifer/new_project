import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Todo from './components/Todo';
import About from './components/About';

import React, { useState } from 'react'; //imrs

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whether u want dark or light theme
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type :type
    })
    setTimeout(()=>{setAlert(null)}, 1500);

  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enables', "sucess")
     
    // setInterval function calling in title
      // setInterval(() => {
      //   document.title = "welcome to textUtils"
      // }, 2000 );
      // setInterval(() => {
      //   document.title = "Install textUtils"
      // }, 1500 );


      
    
    }

    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enables', "sucess")
      document.title = "textUtils - LightMode"
    }

  }


  return (
   <>
   <Router>
      <Navbar title= "TextUtils" mode = {mode} toggleMode={toggleMode} />
      <Alert alert= {alert}/>

      {/* THIS IS THE LEARING TASK OF REACT JS  */}
      <div className="container my-3">
        {/* USE EXACT PATH INSTEAD OF PATH WHILE ROUTING */}
        {/* SWITCH HAS BEEN REPLACED BY ROUTES ALWAYS REMEMBER */}
      <Routes>
      <Route exact path="/about" element={<About />} />  
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text ' mode = {mode}/>} />
      {/* THIS ONE IS THE EXTRA ASSIGNMENT FROM SUMIT SIR >>>> */}
      <Route exact path="/todo" element={<Todo/>}/>  
      </Routes>
      
      </div>
   </Router>

   </>
  );
}

export default App;
