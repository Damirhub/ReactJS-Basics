import React from "react";

export class Home extends React.Component {
  render(){
    var text = "Something";
    return(
     
        <div>
          <p>In a new Component! </p>
          <p>Da name IS {this.props.name}</p>
          <p>{text}</p>
          <p>User Object => Name: {this.props.Muzer.name} </p>           
        </div>



    )
  }

}