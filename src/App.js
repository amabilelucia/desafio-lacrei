import Home from './components/Home';
import React, {Component} from 'react';
import {Fonts} from './styles';

class App extends Component {
  render() {
  return (
    <div className="page">
      <Fonts>
        <Home />
      </Fonts>
    </div>
  );
  }
}

export default App;
