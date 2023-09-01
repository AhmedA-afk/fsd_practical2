import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color1: 'red',  // Initial color for the first heading
      color2: 'blue', // Initial color for the second heading
      isChanging: false, // To track if color change is active
    };
    this.intervalId = null; // To store the interval ID
  }

  handleStartButtonClick = () => {
    if (!this.state.isChanging) {
      this.intervalId = setInterval(() => {
        // Using 'var' for color1
        var newColor1 = getRandomColor();
        
        // 'let' variable for color2 remains unchanged
        this.setState({
          color1: newColor1,
        });
      }, 1000);

      this.setState({ isChanging: true });
    } else {
      clearInterval(this.intervalId);
      this.setState({ isChanging: false });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ color: this.state.color1 }}>D22CS080</h1>
        <h1 style={{ color: this.state.color2 }}>Ahmed Ansari</h1>
        <button onClick={this.handleStartButtonClick}>
          {this.state.isChanging ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default App;
