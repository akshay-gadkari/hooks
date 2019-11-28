// import React, { useState } from 'react';
// import './App.css';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.state.list = ['a'];
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({value: e.target.value});
//   }

//   handleSubmit(e) {
//       e.preventDefault();
//       this.state.list.push(this.state.value);
//       console.log(this.state.list);
//   };

//   render() {
//     return (
//       <div className="App">
//         <form>
//           Add Note:
//           <br/>
//           <input
//             name="note"
//             placeholder="note"
//             type="text"
//             onChange={this.handleChange}
//             value={this.state.value}/>
//             <br/>
//             <button
//               id="myButton"
//               onClick={
//                 (e) => this.handleSubmit(e) && console.log('display')
//               }>
//               Submit
//             </button>
//         </form>
//         <ul>{this.state.list.map(value => <li>{value}</li>)}</ul>
//         </div>
//     );
//   }
// };

// export default App;

import React, { useState } from 'react';
import './App.css';

export default function App(props) {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setNames([...names, name]);
  };

  return (
    <div className="App night dark-scheme">
      <div className="night dark-scheme">Night (changes in dark scheme)</div>
      <form>
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="name"/>
          <button onClick={handleSubmit}>Add</button>
      </form>
      <div className="list">
        {names.map(name => (
          <p className="item">{name}</p>
        ))}
    </div>
      </div>
  );
};
