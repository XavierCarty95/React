import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        < Route exact path='/' componenet={Home} />
        < Route path='/about' componenet={About} />
        < Route path='/contact' componenet={Contact} />
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
