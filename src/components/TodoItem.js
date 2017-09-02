import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isStrike: false
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.state.isStrike = !this.state.isStrike;    
    this.setState(this.state);
  }

  render() {
    const isStrike = this.state.isStrike;
    let item = null;
    if (isStrike) {
        item = <strike>{this.props.value}</strike>
    } else {
        item = this.props.value
    }

    return (
      <li>
      <h3 onClick={this.handleClick}>{item}</h3>
      </li>
    );
  }
}

export default TodoItem;
