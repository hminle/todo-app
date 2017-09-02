import React, { Component } from 'react';
import TodoItem from'./TodoItem';
import {connect} from 'react-redux';

class TodoList extends Component {

  render() {
    return (
      <ul>
        {this.props.items.map((e, i) => <TodoItem key={i} value={e} />)}
      </ul>
    );
  }
}

export default connect(function(state){
    return {items: state.items}
})(TodoList);
