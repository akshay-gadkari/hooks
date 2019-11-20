import React, { useState } from 'react';
import {useForm} from './useForm';
import {Hello} from './hello';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const [showHello, setShowHello] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>}
      <input
        name="email"
        type="text"
        value={values.email}
        placeholder="email"
        onChange={handleChange}
        />
      <input
        name="firstName"
        type="text"
        value={values.firstName}
        placeholder="first name"
        onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={values.password}
          placeholder="password"          
          onChange={handleChange}
          />
    </div>
  );
};

export default App;
