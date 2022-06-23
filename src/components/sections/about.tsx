import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <div style={ { width: '50%' } }>
      <h1>{t(`home.sections.about`)}</h1>

      <p>{t(`about.p1`)}</p>

      <p>{t(`about.p2`)}</p>

      <p>{t(`about.p3`)}</p>

      <p>{t(`about.p4`)}</p>

      <div>
        UMode, Vertical Digital, Ubistart, Inti, Cartórios de Protesto
      </div>

      <p>{t(`about.p5`)}</p>
    </div>
  )
}

export default AboutSection;
