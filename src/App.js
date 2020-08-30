import React,{Component} from 'react';
import Tut from './tut'
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      a:1
    }
  }
  render() {
  return (
    <div className="App">
      <Tut></Tut>
      <h1> AGE = {this.props.age} {this.state.a}</h1>
      <button onClick = {this.props.onAgeUp}>increment</button>
      <button onClick = {this.props.onAgeDown}>decrement</button>
    </div>
  );
}
}
const mapStateToProps = (state) =>{
  return {
    age:state.age
  }
}

const mapDispachToProps = (dispach) =>{
  return {
    onAgeUp:() => dispach({type:'AGE_UP'}),
    onAgeDown:() => dispach({type:'AGE_DOWN'})
  }
}

export default connect(mapStateToProps,mapDispachToProps) (App);
