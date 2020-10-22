import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import Form from './components/Form/Form';
import CommentList from './components/CommentList/CommentList';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1 className="container-title">
            Comments
          </h1>
          <Form />
          <CommentList />
        </div>
      </Provider>
    );
  }
}

export default App;
