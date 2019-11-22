import React, { useState } from 'react';

const App = () => {
  const [note, setNote] = useState('');
  //const [notes, setNotes] = useState("");
  const notes = [];
  
  // document.getElementById("myButton").addEventListener("click", function(event){
  //   event.preventDefault();
  // });
  
  function handleSubmit(e) {
    e.preventDefault();
    notes.push(note);
    console.log("notes", notes);
    // return false;
  };
  
  return (
    <div className="App">
      <form>
        Add Note:
        <input
          name="note"
          placeholder="note"
          type="text"
          onChange={e => setNote(e.target.value)}
          value={note}/>
          <button
            id="myButton"
            onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
      </form>
      <h1>{note}</h1>
    </div>
  );
};

export default App;
