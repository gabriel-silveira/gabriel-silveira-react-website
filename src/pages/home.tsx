import { Component } from 'react';

import '../assets/scss/section-transitions.scss';

import Transitions from '../services/page-transition';

import ProfilePicture from '../assets/images/gabriel-silveira.jpg';

type HomeType = {
  sections: string[],
}

class HomePage extends Component<{}, HomeType> {
  constructor(props: object) {
    super(props);

    this.state = {
      sections: [
        'About',
        'Experience',
        'Skills',
        'Contact Me',
      ],
    }
  }

  componentDidMount() {
    new Transitions().init();
  }

  renderSection(section: string) {
    return (
      <section className="section">
        <div className="close-section">&times;</div>

        <div className="demo-box">{section}</div>
      </section>
    );
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
          {this.state.sections.map(
            (section: string) => this.renderSection(section),
          )}
        </main>
      </div>
    )
  }
}

export default HomePage;
