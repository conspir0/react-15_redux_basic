import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="container-title">
            Hello World
        </div>
        </div>
      </Provider>
    );
  }
}

export default App;
