import { Component } from "react";

import '../../assets/scss/toggle-light-button.scss';

type ToggleLightButtonType = {
  light: boolean | undefined,
}

class ToggleLightButton extends Component<{}, ToggleLightButtonType> {
  constructor(props: object) {
    super(props);

    this.state = {
      light: false,
    }
  }

  componentDidMount() {
    // start with lights off
    this.toggleLight();
  }

  lightIsOn = () => {
    return this.state.light;
  }

  changeTheme() {
    const body = document.getElementsByTagName('body')[0];

    body.classList[this.lightIsOn() ? 'add' : 'remove']('light');
  }

  toggleLight = () => {
    this.setState({
      light: !this.lightIsOn(),
    });

    this.changeTheme();
  }

  getLightState = () => {
    return this.lightIsOn() ? 'Dark' : 'Light';
  }

  getButtonClass() {
    return this.lightIsOn() ? 'theme-dark' : '';
  }

  render() {
    return (
      <div className="toggle-light-button-wrapper">
        <div>
          <input
            id="theme-toggle"
            type="checkbox"
            checked={this.state.light}
            onChange={this.toggleLight}
          />

          <label htmlFor="theme-toggle"><span></span></label>
        </div>

        <div className="light-status-label">
          {this.getLightState() }
        </div>
      </div>
    );
  }
}

export default ToggleLightButton;
