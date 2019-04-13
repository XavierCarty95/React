import React, { Component } from 'react';
import Ninjas from "./ninja";
import AddNinja from './addNinjas'



class App extends Component {
  state = { 
    ninjas : [ { name: 'Xavier', age: 24, belt: 'black' , id: 1}, 
               { name: 'Deshan', age: 29, belt: 'black' , id: 1},
               { name: 'Tre', age: 23, belt: 'orange', id: 3}
      
    
    ]
  }
  
  addNinja = (ninja) => {
    
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({
      ninjas: ninjas
    })
    
  }
  
  deleteNinja = (id) => {
    console.log(id)
    
  }
  
 render() {
    return (
      <div className="App">
        <h1> My first React App</h1>
        <p> Welcome </p>
        <Ninjas deleteNinja= {this.deleteNinja} ninjas = {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
        
      </div>
    );
  }
}

export default App;
