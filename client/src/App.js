import React, { Component } from 'react';
import './App.css';
import AvailableRooms from './comp/AvailableRooms';
import NewGuest from './comp/NewGuest';


class App extends Component {
  state={
    reload:true
  }
  render() {
    return (
      <div className={this.state.reload+ " App"}>
      <NewGuest changer={this.change.bind(this)}/>
      <AvailableRooms/>
      </div>
    );
  }
  change(){
    this.setState({reload:false})
  }
}

export default App;
