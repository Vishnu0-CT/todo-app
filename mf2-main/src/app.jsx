import React from 'react';

import Style from './style.css';

const App = ({notes, setPage}) => {
  let remaining = notes.filter((note) => note.status === 0).length;
  return (
    <div>
      <h1>Completed: {notes.length-remaining}</h1>
      <h1>Remaining: {remaining}</h1>
      <h1>Total: {notes.length}</h1>
      <button onClick={()=>setPage(0)}>Show TODO</button>
    </div>
  );
};

export default App;