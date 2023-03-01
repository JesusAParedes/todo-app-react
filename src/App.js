import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false, 
      todos: [], 
      text: ''
    };
  };

  onClickHandler = () => {
    const toDos = this.state.todos.slice();
    toDos.push(this.state.text)

    this.setState({
      todos: toDos,
      text: " ",
    });
    console.log(this.state.todos);
  };

  onChangeHandler = (e) => {
    this.setState({...this.state,
    text : e.target.value
  });
  };

  onDelete = (index) => {
    this.setState({...this.state,
      todos : this.state.todos.filter((r, idx) => idx !== index)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            <input type='text' name='text' value={this.state.text} onChange={this.onChangeHandler}></input>
          </form>
          <button onClick={this.onClickHandler} >What's my plan for today?</button>
          {this.state.todos.map((todo, index) => (
          <p key={index}>{todo}<button onClick={() => {this.onDelete(index)}}>Remove Todo</button></p>))}
        </header>
      </div>
    );
  };
};

export default App;
