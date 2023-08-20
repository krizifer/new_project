import React, {useState} from 'react'

const ToDo = () => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(0);

  function addItem() {
    if (!newItem) {
      alert('Enter your Item');
      return;
    }

    if (editId !== 0) {
      const updatedItems = items.map(item =>
        item.id === editId ? { ...item, value: newItem } : item
      );
      setItems(updatedItems);
      setNewItem('');
      setEditId(0);
    } else {
      const newItemObj = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
      };
      setItems(oldList => [...oldList, newItemObj]);
      setNewItem('');
    }
  }

  function removeList(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  function editList(id) {
    const editTask = items.find(e => e.id === id);
    setNewItem(editTask.value);
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