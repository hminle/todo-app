import React, { Component } from 'react';
//import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

class TodoInput extends Component {
  handleKeyDown(event) {
    //event.preventDefault();
    if (event.which === ENTER_KEY){
      var {dispatch} = this.props;
      dispatch({
        type: 'ADD_ITEM',
        item: this.refs.txt.value
      });
    }
  }


  render() {
    return (
      <div className="input-large">
            <input
            type="text"
            placeholder="What you need to do?" 
            onKeyDown={this.handleKeyDown.bind(this)}
            ref="txt" />
      </div>
    );
  }
}

export default connect()(TodoInput);
