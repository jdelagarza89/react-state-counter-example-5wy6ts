import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decrement}>Decrease</button>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById('root'));
