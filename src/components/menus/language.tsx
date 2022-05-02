import { useState } from "react";
import { useTranslation } from 'react-i18next';

import { ILanguage, languages } from "../../services/i18n";

import '../../assets/sass/languages.sass';

function ChooseLanguage() {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    languages[0],
  );

  const setLanguage = (language: ILanguage) => {
    setSelectedLanguage({ ...language });

    void i18n.changeLanguage(language.code);
  }

  const isActive = (language: ILanguage) => {
    return language.code === selectedLanguage?.code;
  }

  const renderLanguages = (language: ILanguage) => {
    return (
      <div
        key={language.code}
        className={isActive(language) ? 'active' : ''}
        onClick={() => setLanguage(language)}
      >
        {language.name} {isActive(language)}
      </div>
    );
  }

  return (
    <div className="languages-list">
      {languages.map(renderLanguages)}
    </div>
  )
}

export default ChooseLanguage;
