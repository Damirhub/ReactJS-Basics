import React from "react";


export class Home extends React.Component {


  constructor(props) {
    super();
      this.state = {
        age: props.age,
        status: 0,
        min: 0,
        hour:0
      }
      // setInterval(() => {
      //   this.setState({
      //     status: this.state.status + 0.01
      //   })
        
      // }, 10);
  }
 
  interval () {
        setInterval(() => {
        this.setState({
          status: this.state.status + 0.01
        })
        
      }, 10)
    }

    interval2 () {
      setInterval(() => {
      this.setState({
        status: this.state.status - 0.01
      })
      
    }, 10)
  }
  
    

  resetTimer () {
    this.setState ({
      status : 0,
      min :0,
      hour:0
    })
  }


 minute () {
  this.setState ({
      min : this.state.min ++
  })
 }

 resetMin() {
   this.setState ({
    min : 0
   })
 }

hour () {
  this.setState ({
      hour : this.state.hour ++
  })
 }


  render() {
    //var min = 3;
   
    let stat = Math.round(this.state.status*100)/100;  
    
      if(stat > 2 ){
        this.resetTimer();
        this.minute();
     }

     if(stat > 2 ){
      this.minute();
     }

     if(this.state.min>60){
       this.resetMin();
       this.hour()
     }

     if(this.state.min>60){
      this.hour();
    }

   
      return (
        <div>

            

            

            <button  style = {{'margin' : '0px 20px'}} onClick = {() => this.interval() } className = "btn btn-success">Start</button>


            <button onClick = { () => this.interval2() } className = "btn btn-danger">Stop</button>

            <h3>Status: {this.state.hour} :{this.state.min} :{stat}</h3>


            <button style = {{'margin' : ' 0px 20px', 'width' : '130px'}} 
             onClick = { () => this.resetTimer() } className = "btn btn-warning">Reset </button>

        </div>
    )
  }
}


