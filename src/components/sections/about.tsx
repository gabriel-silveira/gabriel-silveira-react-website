import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  const linkedinUrl = 'https://www.linkedin.com/in/gabriel-silveira/'

  return (
    <div style={ { width: '50%' } }>
      <h1>{t(`home.sections.about`)}</h1>

      <p>
        Hi! My name is &lt;Gabriel Silveira&gt; and i'm a web developer, based in Nazaré, Portugal.
      </p>

      <p>
        I've been working in software development for over 20 years with
        a greater focus on front-end.
      </p>

      <p>
        In recent years specialized in building graphical tools
        such as vector graphics editors, flow diagrams, seat
        maps and chatbot builders using Canvas API, SVG, Fabric.js,
        Joint.js among others.
      </p>

      <p>I'm proud to have collaborated with some awesome companies:</p>

      <p>
        I’m always open to discussing new projects or partnership opportunities,
        so feel free to get in touch by e-mail or phone.
      </p>
    </div>
  )
}

export default AboutSection;
