import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";

import AboutSection from '../components/sections/about';

import '../assets/scss/section-transitions.scss';

import Transitions from '../services/transitions';

import ProfilePicture from '../assets/images/gabriel-silveira.jpg';

function Home() {
  let transitions: Transitions;

  const { t } = useTranslation();

  const [
    openSectionEventsAdded,
    setOpenSectionEventsAdded,
  ] = useState<boolean>(false);

  const [currentSection] = useState('');

  const [sections] = useState<string[]>([
    'about',
    'experience',
    'skills',
    'contact',
  ]);

  function initSections() {
    if (!openSectionEventsAdded) {
      transitions = new Transitions();

      transitions.init();

      setOpenSectionEventsAdded(true);
    }
  }

  useEffect(() => {
    initSections();
  });

  const renderContent = (section: string) => {
    if (section === sections[0]) {
      return <AboutSection />
    } else {
      return <p>Funciona!</p>
    }
  }

  const renderSection = (section: string) => {
    return (
      <section
        className="section"
        key={section}
      >
        <div className="close-section">&times;</div>

        <div className="section-box">
          {t(`home.sections.${section}`)}
        </div>

        <div
          className="page-content-wrapper"
        >
          {renderContent(section)}
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
