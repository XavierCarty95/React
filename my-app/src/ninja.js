import React, {Component} from 'react'; 

class Ninjas extends Component{
    render(){
        console.log(this.props);
        return(
        <div className = "ninja">
        <div> Name: {this.props.name}</div>
        <div> Age: {this.props.age}</div>
        <div> Belt: {this.props.age.belt}</div>
        </div>
        )
    }
}

export default Ninjas