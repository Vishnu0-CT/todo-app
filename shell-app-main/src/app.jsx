import React from 'react';
import { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import AppFromMf1 from 'mf1/App';
import AppFromMf2 from 'mf2/App';

import './style.css';

const App = () => {
  let [notes,setNotes] = useState([]);
  let [page,setPage] = useState(0);
  return (
    <div>
      <Header notes={notes}/>
      <div className="body">
        <NavBar className="nav-bar"/>
        {page===0 ? <AppFromMf1 notes={notes} setNotes={setNotes} setPage={setPage}/> : <AppFromMf2 notes={notes} setPage={setPage}/>}
      </div>
    </div>
    
  );
};

export default App;