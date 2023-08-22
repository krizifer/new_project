import React, {useState} from 'react'

const ToDo = () => {
  const [newItem, setNewItem] = useState(''); // Holds the text of the new task
  const [items, setItems] = useState([]); // Holds the list of tasks
  const [editId, setEditId] = useState(0); // keeps track of which task is being edited

  function addItem() {
    if (!newItem) {
      alert('Enter your Item'); // alert if the new task box is empty
      return;
    }

    if (editId !== 0) {
      // if edited is not 0 it means we are editing an existing task
      const updatedItems = items.map(item =>
        item.id === editId ? { ...item, value: newItem } : item 
      );
      setItems(updatedItems); // update the list woth the edited task
      setNewItem(''); // clear the input field
      setEditId(0); // clear the editID showing we are not editing anymore
    } else {
      // If editID is 0 it means we are adding new task
      const newItemObj = {
        id: Math.floor(Math.random() * 1000), // generate a unique code
        value: newItem // get the value from the imput field
      };
      setItems(oldList => [...oldList, newItemObj]); // add the new task to the list
      setNewItem(''); // clear the input box
    }
  }

  function removeList(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray); // remove the task with the specified ID from the list
  }

  function editList(id) {
    const editTask = items.find(e => e.id === id); // fill the input with the task text
    setNewItem(editTask.value); // set the editID to indicate which task is being edited
    setEditId(id);
  }

  return (


    <div>
      <div className="mb-3 text-center">
      <label htmlFor="exampleFormControlTextarea1" className="form-label" value><h2>List your Todos</h2></label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={newItem} onChange={e => setNewItem(e.target.value)}></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={addItem}>{editId !== 0 ? 'Edit Item' : 'Add Item'  }</button>
    <ul className='list-unstyled mt-3'>
      {items.map(item => {
        return(
          <li  key = {item.id}>{item.value} <button className='m-2 btn btn-danger' onClick={() => removeList(item.id)}>X</button> <button className="btn btn-success" onClick={() => editList(item.id)}>Edit</button></li>)
      })
    }
      <li></li>

    </ul>
    </div>
  )
}

export default ToDo