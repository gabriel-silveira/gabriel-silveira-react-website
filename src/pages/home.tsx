import { useTranslation } from "react-i18next";

import '../assets/scss/section-transitions.scss';

import Transitions from '../services/transitions';

import ProfilePicture from '../assets/images/gabriel-silveira.jpg';

function Home() {
  const { t } = useTranslation();

  new Transitions().init();

  function renderSection(section: string) {
    return (
      <section
        className="section"
        key={section}
      >
        <div className="close-section">&times;</div>

        <div className="section-box">{section}</div>
      </section>
    );
  }

  function getSections() {
    return t(
      'home.sections',
      { returnObjects: true },
    ) as string[];
  }

  return (
    <div>
      <img
        src={ProfilePicture}
        alt="Gabriel Silveira"
        id="profile-picture"
      />

      <main className="main">
        {getSections().map(renderSection)}
      </main>
    </div>
  )
}

export default Home;
