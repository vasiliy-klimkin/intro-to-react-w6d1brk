import React, {Component} from 'react';
import Test from './test';




class CountControl extends Component {


  handleName = (evt) => {
    this.props.greeting('vaasdsafafs')
  }

  render() {
    console.log(this);
    return (
      <div>
        THIS IS A STATE THAT HAS BEEN PASSED TO ME FROM PARENT
        <p className="red">{this.props.countState}</p>
        <button onClick={this.props.handleCountUp}>CLICK TO UP</button>
        <button onClick={this.props.handleCountDown}>CLICK TO DOWN</button>
        <Test countState={this.props.countState}/>
      </div>
    )
  }
}


export default CountControl;