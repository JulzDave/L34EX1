import React, { Component } from 'react';
import '../App.css';

class Mapper extends Component {
    state={
        color:"green"
    }
    
componentDidMount(){
    if(this.props.r.guest_name!=null){
        this.setState({color:"red"})
    }
    else{
        this.setState({color:"green"})
    }
}

    render() {
        
        return (
            
            <div className="App">
<div className={this.state.color+" aRoom"}>
room num&nbsp;
{this.props.r.id}
</div>
      </div>
    );
}
}

export default Mapper;
