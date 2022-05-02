import { useTranslation } from "react-i18next";

import '../assets/scss/section-transitions.scss';

import Transitions from '../services/transitions';

import ProfilePicture from '../assets/images/gabriel-silveira.jpg';
import { useState } from "react";

function Home() {
  const { t } = useTranslation();

  new Transitions().init();

  const [sections] = useState<string[]>([
    'about',
    'experience',
    'skills',
    'contact',
  ]);

  function renderSection(section: string) {
    return (
      <section
        className="section"
        key={section}
      >
        <div className="close-section">&times;</div>

        <div className="section-box">
          {t(`home.sections.${section}`)}
        </div>
      </section>
    );
  }

  return (
    <div>
      <img
        src={ProfilePicture}
        alt="Gabriel Silveira"
        id="profile-picture"
      />

      <main className="main">
        {sections.map(renderSection)}
      </main>
    </div>
  )
}

export default Home;
