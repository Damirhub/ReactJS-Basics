import React from 'react';
import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink : "HoAmeA"
    }
  }



onGreet() {
  alert("alert!!!");
}

onChangeLinkName(newName) {
  this.setState = ({
    homeLink: newName
  })

}


  render() {

    return (
      <div className = "container ">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            <Header homeLink = {this.state.homeLink}/>
          </div>
        </div>

        <div className = "row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home  name = {"PERA"} 
              initialAge = {29}  
              greet = {this.onGreet}
              changeLink = {this.onChangeLinkName.bind(this)}
              />
              <h2>{this.state.homeLink}</h2>
        </div>
        </div>
      </div>
    )
  }
}





//render( <App/>, document.getElementById('root'));





export default App;