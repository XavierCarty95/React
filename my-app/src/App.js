import React, { Component } from 'react';
import Ninjas from "./ninja";
import AddNinja from './addNinjas'



class App extends Component {
  state = { 
    ninjas : [ { name: 'Xavier', age: 24, belt: 'black' , id: 1}, 
               { name: 'Xavier', age: 20, belt: 'black' , id: 1} 
      
    
    ]
  }
  render() {
    return (
      <div className="App">
        <h1> My first React App</h1>
        <p> Welcome </p>
        <Ninjas ninjas = {this.state.ninjas}/>
        <AddNinja />
        
      </div>
    );
  }
}

export default App;
