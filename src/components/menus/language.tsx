import { Component } from "react";

import '../../assets/sass/languages.sass';

type LanguagesListType = {
  selectedLanguage: string,
  languages: string[],
}

class ChooseLanguage extends Component<{}, LanguagesListType> {
  constructor(props: never) {
    super(props);

    this.state = {
      selectedLanguage: 'English',
      languages: [
        'English',
        'Português',
      ]
    }
  }

  setLanguage = (language: string) => {
    this.setState({
      selectedLanguage: language,
    });
  }

  renderLanguages = (language: string) => {
    return (
      <div
        className={ this.state.selectedLanguage === language ? 'active' : '' }
        onClick={() => this.setLanguage(language)}
      >
        {language}
      </div>
    );
  }

  render() {
    return (
      <div className="languages-list">
        {this.state.languages.map(
          this.renderLanguages,
        )}
      </div>
    );
  }
}

export default ChooseLanguage;
