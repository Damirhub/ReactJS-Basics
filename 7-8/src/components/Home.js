import React from "react";


export class Home extends React.Component {


  constructor(props) {
    super();
      this.state = {
        age: props.age
      }
  }

  makeOlder() {
    this.setState ({
      age: this.state.age + 3
    });
  }

  makeYounger() {
    this.setState ({
      age: this.state.age - 3
    });
  }

  reset () {
    this.setState ({
      age: this.props.age
    })
  }

  render() {
      return (
        <div>

            <p>the name is {this.props.name} and age is {this.state.age}</p>

            <button onClick = { this.makeOlder.bind(this)} className = "btn btn-primary">Make me older!</button>
            <br/>
            <br/>

            <button onClick = { () => this.makeYounger() } className = "btn btn-success">Make Me Younger</button>
            <br/>
            <br/>

            <button onClick = { () => this.reset() } className = "btn btn-danger">Reset</button>

        </div>
    )
  }
}