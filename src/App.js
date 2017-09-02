import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './storeConfig.js';

class App extends Component {
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

