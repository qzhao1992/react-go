import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFotter';
import AppContent from './AppCentent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {

  render() {
    return (
      <div class="app">
        <div>
          <h1>Hello, world!</h1>
          <AppContent />
        </div> 
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));