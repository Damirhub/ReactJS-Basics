import React from "react";


export class Home extends React.Component {


  constructor(props) {
    super();
      this.state = {
        age: props.initialAge,
        status: 0, 
        homeLink : "Changed Link"
      }

      setTimeout(() => {
        this.setState({
          status:1
        })
      }, 3000);

  }
 

  makeOlder() {
    this.setState ({
      age: this.state.age + 3
    });
    if( this.state.age > 50 ){
      this.reset ();
    }
  }

  makeYounger() {
    this.setState ({
      age: this.state.age - 3
  
    });

    if( this.state.age < 1 ){
      this.reset ();
    }
  }

  reset () {
    this.setState ({
      age: this.props.age
     
    })
  }

  resetTimer () {
    this.setState ({
      status : 0
    })
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
 

  render() {
    var min = 1;
    
    let stat = Math.round(this.state.status*100)/100;  
    
      if(stat > 60 ){
        this.resetTimer();
        min ++;
     }

   
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

            <h3>Status: {min} {stat}</h3>


            <button onClick = { () => this.resetTimer() } className = "btn btn-warning">timer reset </button>
            <button onClick = {this.props.greet}>Greet</button>
          <hr />
           <button onClick = {() => this.onChangeLink.bind(this)}>CHAnge Name</button>

        </div>
    )
  }
}


