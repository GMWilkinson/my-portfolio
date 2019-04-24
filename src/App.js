import React, { Component } from 'react';
import Frame from './components/layout/Frame'
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Frame />
      </section>
    );
  }
}

export default App;
