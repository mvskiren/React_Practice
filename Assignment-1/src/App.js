import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


class App extends Component {
 state =
 {
   username :"Kiran"
 }

switcher = (event) =>{
  this.setState({
    username :event.target.value
   } )

}
  render()
{
  return(
    <div>
    <UserInput changed={this.switcher} > </UserInput>
    <UserOutput  usrname={this.state.username} > </UserOutput>
    </div>
    );
}

}

export default App;
