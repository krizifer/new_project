import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Todo from './components/Todo';

//import About from './components/About';
import React, { useState } from 'react'; //imrs

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
   <Navbar title= "TextUtils" mode = {mode} toggleMode={toggleMode} />
   <Alert alert= {alert}/>

   {/* <div className="container my-3">
   <TextForm showAlert={showAlert} heading='Enter the text ' mode = {mode}/> */}
   
   {/* <About/> */}
   {/* </div> */}
   <div>
    <Todo/>
   </div>

   </>
  );
}

export default App;
