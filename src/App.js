import './App.css';
import {Grocery} from "./Grocery";
import {Component} from "react";


class App extends Component {
  render () {
      return(
        <div className='app'>
  <div>
    <h1>My Grocery List</h1>
  </div>

    <Grocery/>
    </div>)
}}


export default App;