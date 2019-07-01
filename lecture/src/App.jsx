

import React, {Component} from 'react';
import CountControl from './CountControl.jsx';

let number = 123;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, name: 'Vasiliy', randomArray: [1,2,3,'hello']}
  }

  countUp = () => {

    let tempCount = this.state.count+1;
    this.setState({ count: tempCount })
  }

  countDown = () => {

    let tempCount = this.state.count-1;
    this.setState({ count: tempCount })
  }

  moonshinehorn = (name) => {
    console.log(name + " inside of app.jsx")
    alert('hello from app.jsx')
  }


  isFive = () => {
    return this.state.count >= 5
  }

  render() {

    return (
      <div>
        <h1>BASIC COUNTER</h1>
        <h4>{this.state.count}</h4>
        <CountControl
          x={number}
          countState={this.state.count}
          greeting={this.moonshinehorn}
          handleCountUp = {this.countUp}
          handleCountDown = {this.countDown}
        />

        {
          this.isFive() ?
          (
            <div>Count is FINALLY at 5!!</div>
          ) : (
            <div>Not 5 yet</div>
          )
        }


        { this.isFive() && (
            <div>
              Count is FINALLY at 5!!
            </div>
          )
        }
      </div>
    );
  }
}
export default App;
