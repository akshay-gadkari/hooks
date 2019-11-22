import React, { useState } from 'react';

const App = () => {
  const [note, handleChange] = useState('');
  const submittedNotes = [];  
  return (
    <div className="App">
      <form>
        Add Note:
        <input
          name="note"
          placeholder="note"
          type="text"
          onChange={e => handleChange(e.target.value)}
          value={note}/>
          <button
            onClick={() => submittedNotes.push(note) && console.log(submittedNotes)}>
            Submit
          </button>
      </form>
      <h1>{note}</h1>
    </div>
  );
};

export default App;
