import React, { Component } from 'react';
import '../App.css';
import Mapper from './mapper';

class AvailableRooms extends Component {
  state={
    allrooms:[]
  }

   componentDidMount(){
      this.fetcher2()
        
  }
  render() {
    return (
      <div className="App">
<div className="Allrooms">
{this.state.allrooms.map(r=><Mapper key={r.id} r={r}/>)}
</div>
      </div>
    );
  }
  async fetcher2(){
    var res = await fetch('http://localhost:3000/allrooms', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    // eslint-disable-next-line 
    const content = await res.json(); 
    this.setState({allrooms:content.res22})
   debugger;
        // this.setState({classer:"vs2"})
        // this.setState({classer2:"invisi"})
  }
}

export default AvailableRooms;
