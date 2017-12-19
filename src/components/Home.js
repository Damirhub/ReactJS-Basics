import React from "react";


export class Home extends React.Component {
  render(){
    var text = "Something";

    let mobi = this.props.user.hobbies.map(hobi => {
      return <li>{hobi}</li>
    })
     

    return(     
        <div>
          <p>In a new Component! </p>
          <h4>Da name IS {this.props.name}</h4>
          <p>{text}</p>
          <h4>User Object => Name: {this.props.user.name} </h4>     
 
      <div>
        <h3>Hobbies</h3>
        {this.props.user.hobbies[1]}
        {mobi}
        <hr/>

        {
          this.props.user.hobbies.map( (bibi, i) =>
          <li key = {i}>{bibi}</li>)
        }
     
         
        </div>
    </div>
    )
  }
}