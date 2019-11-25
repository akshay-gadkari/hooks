import React, { useState } from 'react';

class App extends React.Component {
  // let note = '';
  // let notes = ['1'];
  
  // const DisplayNotes = () => {
  //   if (notes.length !==0) {
  //     return (
  //       <div>
  //         <h1>{notes[0]}</h1>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state.list = ['a'];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
      e.preventDefault();
      this.state.list.push(this.state.value);
      console.log(this.state.list);
  };

  render() {
    return (
      <div className="App">
        <form>
          Add Note:
          <br/>
          <input
            name="note"
            placeholder="note"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}/>
            <br/>
            <button
              id="myButton"
              onClick={
                (e) => this.handleSubmit(e) && console.log('display')
              }>
              Submit
            </button>
        </form>
        <ul>{this.state.list.map(value => <li>{value}</li>)}</ul>
        </div>
    );
  }
};

export default App;
