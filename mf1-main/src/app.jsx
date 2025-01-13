import React, { useState } from 'react';
import './style.css';


const App = ({notes, setNotes, setPage}) => {
  console.log(notes);
  let [add,setAdd] = useState('');
  function appendNote() {
    setNotes([...notes, {todo: add, status: 0}]);
    console.log(notes);
    setAdd('');
  }
  function markCompleted(index) {
    let newNotes = [...notes];
    newNotes[index]["status"] = 1;
    setNotes(newNotes);
    console.log(notes);
  }
  function markIncomplete(index) {
    let newNotes = [...notes];
    newNotes[index]["status"] = 0;
    setNotes(newNotes);
    console.log(notes);
  }
  return (
    <div> 
      <div>
        <h2>Todo</h2>
        <input type="text" value={add} onChange={(event) => {setAdd(event.target.value)}}/>
        <button onClick={appendNote}>+</button>
      </div>
      
      {
        notes.map((note, index) => {
          return (
            <div className='note'>
              <p>{note["todo"]}</p>
              {note["status"] === 0 ? null : <p>{" (Completed)"}</p>}
              {note["status"] === 0 ? <button onClick={()=>markCompleted(index)}>Mark as completed</button> : <button onClick={()=>markIncomplete(index)}>Mark as incomplete</button>}
              
            </div>
          );
        })
      }

      <button onClick={()=>setPage(1)}>Show Stats</button>
    </div>
  );
};

export default App;