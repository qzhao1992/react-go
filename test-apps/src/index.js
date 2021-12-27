import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import AppFooter from './AppFooter';
import AppContent from './AppCentent';
import AppFooterFunctionalComponent from './AppFooterFunctionalComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import AppHeader from './AppHeader';

class App extends Component {

  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = {posts:[]};
  }

  handlePostChange(posts) {
    this.setState({posts: posts});
  }

  render() {
    const myProps = {
      title: "My Cool App!",
      sybject: "My subject",
      favourite_color: "red"
    }
    return (
      <div className="app">
        <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange}/>
        <AppContent posts={this.state.posts} handlePostChange={this.handlePostChange} />
        {/* <AppFooter /> */}
        <AppFooterFunctionalComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));