import { Component } from 'react';

import '../assets/scss/section-transitions.scss';

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
          id="profile-picture"
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
