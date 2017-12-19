import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";




class App extends React.Component {

  render() {

    var Muzer = {
      name: "Anna",
      hobbies: ["sports ", "mama ", 99]
    };


       
    return (
      <div className = "container ">
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>

        <div className = "row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home name = {"KAX"} age = {"632"}  Muzer = {Muzer} />
              
              
        </div>
        </div>
      </div>
    )
  }
}





//render( <App/>, document.getElementById('root'));





export default App;