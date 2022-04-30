import { Component } from 'react';

import '../assets/scss/home.scss';

import Transitions from '../services/page-transition';

class HomePage extends Component {
  componentDidMount() {
    new Transitions().init();
  }

  render() {
    return (
      <main className="main">
        <section className="section">
          <div className="close-section">&times;</div>
          <div className="demo-box">About</div>
        </section>

        <section className="section">
          <div className="close-section">&times;</div>
          <div className="demo-box">Experience</div>
        </section>

        <section className="section">
          <div className="close-section">&times;</div>
          <div className="demo-box">Skills</div>
        </section>

        <section className="section">
          <div className="close-section">&times;</div>
          <div className="demo-box">Contact Me</div>
        </section>
      </main>
    )
  }
}

export default HomePage;
