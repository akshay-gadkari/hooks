import React, { useState } from 'react';

const App = () => {
  let note = '';
  let notes = [];

  function handleSubmit(e) {
    e.preventDefault();
    notes.push(note);
    console.log(notes);
  };
  
  return (
    <div className="App">
      <form>
        Add Note:
        <br/>
        <textarea
          name="note"
          placeholder="note"
          id="myForm"
          type="text"
          onChange={e => note = (e.target.value)}
          value={notes[0]}/>
          <br/>
          <button
            id="myButton"
            onClick={
              (e) => handleSubmit(e)
            }>
            Submit
          </button>
      </form>
      <h1>{notes}</h1>
    </div>
  );
};

export default App;
