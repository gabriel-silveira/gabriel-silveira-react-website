import { Component } from 'react';

import '../assets/scss/section-transitions.scss';
import '../assets/sass/home.sass';

import Transitions from '../services/page-transition';

import ProfilePicture from '../assets/images/gabriel-silveira.jpg';

class HomePage extends Component {
  componentDidMount() {
    new Transitions().init();
  }

  render() {
    return (
      <div>
        <img
          src={ProfilePicture}
          alt="Gabriel Silveira"
          style={{
            zIndex: 999,
            position: "absolute",
            left: '50%',
            top: '50%',
            marginLeft: -100,
            marginTop: -100,
            width: 200,
            borderRadius: 100,
            border: '10px solid rgba(0, 0, 0, 0.1)',
          }}
        />

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
      </div>
    )
  }
}

export default HomePage;
