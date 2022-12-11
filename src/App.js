import Home from './components/Home';
import React, { Component } from 'react';
import { Fonts } from './styles';
import Profissional from './components/Profissional';
import Usuaria from './components/Usuaria';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Fonts>
        <BrowserRouter>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Profissional />} path="/profissional" />
              <Route element={<Usuaria />} path="/usuaria" />
            </Routes>
          </BrowserRouter>
        </Fonts>
      </div>
    );
  }
}

export default App;
