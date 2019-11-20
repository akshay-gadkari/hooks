import React, { useEffect } from 'react';
import {useForm} from './useForm';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  useEffect(() => {
    console.log("render");
  }, [values.email, values.password]); //does a shallow comparison of the values

//useEffect can replace componentDidMount
  
  return (
    <div className="App">
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
