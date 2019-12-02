import React, {useReducer, useState} from "react";

function reducer(state, action) { //pure function, so it's outside the App function
  switch(action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

const App = () => {
  const [{todos}, dispatch] = useReducer(reducer, {todos: []});
  const [text, setText] = useState();
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          dispatch({type: 'add-todo', text});
          setText('');
        }}>
        <input placeholder="todo" type="text" value={text} onChange={e => setText(e.target.value)}/>
      </form>
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  );
};

export default App;
