import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './storeConfig.js';

class App extends Component {

  constructor(props) {
    super(props);
    var newItemKey = firebase.database().ref().child('app-todo/items').push().key;
    firebase.database().ref().child('app-todo/items').push("job6");
    var update = {};
    update['app-todo/items/' + newItemKey] = 'job7';
    firebase.database().ref().update(update);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <TodoInput />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;

