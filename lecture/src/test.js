import React, {Component} from 'react';



class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a:'apple'
    }
  }

  render() {
    console.log(this);
    return (
      <div className="test">
        THIS TEST {this.props.countState}
      </div>
    )
  }
}


export default Test;