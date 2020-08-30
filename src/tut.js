import React, { Component } from 'react';
import {connect} from 'react-redux'

class tut extends Component {
    render() {
        return (
            <div>
               blllllaabllla {this.props.name} {this.props.age}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
      age:state.age,
      name:state.name
    }
  }

export default connect(mapStateToProps) (tut);