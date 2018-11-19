import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar';

var appRoot = document.getElementById("app-root")

export class App extends React.Component{

  render(){
    return(
      <div>
        <Navbar></Navbar>
      </div>
    )
  }
}

ReactDOM.render(<App/>, appRoot);