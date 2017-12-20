import React from "react";


export class Home extends React.Component {
  render(){
    var text = "Something";

  let hob =   this.props.user.hobbies.map ( (bibi, i) =>{ 
    return <li key = {i}>{bibi}</li>
    })
  

    return(     
      <div>
          <p>In a new Component! </p>
          <h4>Da name IS {this.props.name}</h4>
          <p>{text}</p>
        <h4>User Object => Name: {this.props.user.name} </h4>     
 
         <div>
            <h3>Hobbies</h3>
             {this.props.user.name}
        <hr/>

         {
               this.props.user.hobbies.map( (hobi, i) =>
              <li key = {i}>{hobi}</li>)

          }
         <h2>------------------------</h2>

         {this.props.children}
         {this.props.children}
         {this.props.children}

        </div>
    </div>
    )
  }
}


