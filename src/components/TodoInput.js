import React, { Component } from 'react';
//import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import rootRef from '../firebaseConfig';

//var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

class TodoInput extends Component {
  handleKeyDown(event) {
    //event.preventDefault();
    if (event.which === ENTER_KEY){
      var item = this.refs.txt.value;
      // push item to firebase database
      var itemsRef = rootRef.child('app-todo/items');
      itemsRef.push(item);
      itemsRef.on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          var key = childSnapshot.key;
          var value = childSnapshot.val();
          console.log("Key: " + key + " --> Val: " + value);
        });
      });

      
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
