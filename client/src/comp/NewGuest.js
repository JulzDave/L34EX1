import React, { Component } from 'react';
import '../App.css';

class NewGuest extends Component {
  state={
    name:"",
    start_date:"",
    end_date:"",
    room:""
  }
  render() {
    return (
      <div className="App">
      <h2>Order A Room</h2>
    <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} name="name" placeholder="enter name"></input><br/><br/>
    <span>Starting Date<br/><input value={this.state.start_date} onChange={this.handleChange.bind(this)}  type="date" name="start_date" ></input><br/></span>
    <span>Ending Date<br/><input value={this.state.end_date} onChange={this.handleChange.bind(this)}  type="date" name="end_date" ></input><br/><br/></span>
    <input type="number" value={this.state.room} onChange={this.handleChange.bind(this)}  name="room" placeholder="select room (1-6)"></input><br/><br/>
    <button onClick={this.fetcher.bind(this)}>Order</button>
      </div>
    );
  }

  handleChange(ev){
    this.setState({[ev.target.name]:ev.target.value})
}

async fetcher(){
    var res = await fetch('http://localhost:3000/newguest', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    // eslint-disable-next-line 
    const content = await res.json(); 
   
        // this.setState({classer:"vs2"})
        // this.setState({classer2:"invisi"})

}
}

export default NewGuest;
