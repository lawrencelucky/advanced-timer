import React, { Component } from 'react';
import Header from '../Header/Header';
import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

class TimerBuilder extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Timer />
        <Footer />
      </div>
    );
  }
}

export default TimerBuilder;
