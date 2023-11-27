import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './Components/Weather';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Weather/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/contact'} element={<Contact/>} />

        </Routes>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
