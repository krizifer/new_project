import React, {useState} from 'react'

export default function TextForm(props) {
  const handelUpClick = () =>{
    //console.log('the buttom is clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase', "sucess")
  }

  const handelDownClick=()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase', "sucess")
      }

  const handelClearClick=()=>{
    let newText = '';
    setText(newText);
    props.showAlert('converted to text cleared', "sucess")
      }

  const handelReverseClick=()=>{
    let newText =  text.split('').reverse().join('');
    setText(newText);
    props.showAlert('converted to reverse', "sucess")
      }

  const handelFirstClick = (event) =>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    setText(newText);
    props.showAlert('converted to sentence case', "sucess")
  }

  const handelOnChange = (event) =>{
    //console.log('on change');
    setText(event.target.value)
  }
  
  const [text, setText] = useState("")

  return (
    <>
    <div className="container"  style={{color: props.mode === 'dark'? 'white': 'black',}}  >
      <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelOnChange}  style={{backgroundColor: props.mode === 'dark'? 'grey': 'white', color: props.mode === 'dark'? 'white': 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handelUpClick}>Convert to uppercase</button>
<button className="btn btn-primary m-2" onClick={handelDownClick}>Convert to lowercase</button>
<button className="btn btn-primary m-2" onClick={handelClearClick}>Clear text</button>
<button className="btn btn-primary m-2" onClick={handelReverseClick}>reverse</button>
<button className="btn btn-primary " onClick={handelFirstClick}>Sentence case</button>

    </div>
    <div className="container"  style={{color: props.mode === 'dark'? 'white': 'black',}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{
        return element.length!==0}).length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length  } minutes to read</p>
    </div>
    </>
  )
}
