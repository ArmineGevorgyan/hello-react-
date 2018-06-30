import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Hello from './Hello';

class App extends Component {

  state = {
    arrOfHellos: [],
    
  }

  clickHandler = () => {
    
    this.setState(prevState => ({arrOfHellos: [...prevState.arrOfHellos, [Math.random()]]}));

  }

  render() {
    
    return (
      <div>
        <button onClick={this.clickHandler}>Count {this.state.arrOfHellos.length} </button>
        <div className = "parent">
            {this.state.arrOfHellos.map(elem => <Hello key={elem} />)}
         </div>
      </div>
    );
  }
}

export default App;
