import { Component } from "react";

import Parent from "./Parent";


class App extends Component {

  render(){
    
    return (
      <div className="app">
        <h1>My Cart</h1>
        <Parent className="d-flex"></Parent>
      </div>

    )
  }
}

export default App;