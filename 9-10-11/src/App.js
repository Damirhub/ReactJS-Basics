import React from 'react';
import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

  onGreet() {
    alert ("Helloo!");
  }

  render() {

    return (
      <div className = "container ">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            <Header homeLink = "Homeeee mememee"/>
          </div>
        </div>

        <div className = "row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home  name = {"PERA"} initialAge = {29} greet = {this.onGreet }  />

                      
        </div>
        </div>
      </div>
    )
  }
}





//render( <App/>, document.getElementById('root'));





export default App;