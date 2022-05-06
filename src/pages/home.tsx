import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";

import '../assets/scss/section-transitions.scss';

import Transitions from '../services/transitions';

import ProfilePicture from '../assets/images/gabriel-silveira.jpg';

function Home() {
  const { t } = useTranslation();

  const [
    openSectionEventsAdded,
    setOpenSectionEventsAdded,
  ] = useState<boolean>(false);

  const [sections] = useState<string[]>([
    'about',
    'experience',
    'skills',
    'contact',
  ]);

  function initSections() {
    if (!openSectionEventsAdded) {
      new Transitions().init();

      setOpenSectionEventsAdded(true);
    }
  }

  useEffect(() => {
    initSections();
  });

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
