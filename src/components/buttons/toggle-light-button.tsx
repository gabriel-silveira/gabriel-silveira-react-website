import { Component } from "react";

import '../../assets/sass/toggle-light-button.sass';

type ToggleLightButtonType = {
  light: 'on' | 'off',
}

class ToggleLightButton extends Component<{}, ToggleLightButtonType> {
  constructor(props: object) {
    super(props);

    this.state = {
      light: 'off',
    }

    this.getLightState = this.getLightState.bind(this);
  }

  toggleLight = () => {
    console.log(this.state.light);
    this.setState({
      light: this.state.light === 'on' ? 'off' : 'on',
    });
    console.log(this.state.light);
  }

  getLightState = () => {
    return this.state.light === 'on' ? 'Light' : 'Dark';
  }

  render() {
    return (
      <div
        className="toggle-light-button-wrapper"
      >
        <label
          className="toggle-light-button"
        >
          <input type="checkbox" />

          <div
            className="switch"
            onClick={this.toggleLight}
          >
            <div />
            <div />
            <span />
          </div>
        </label>

        <div
          style={{ marginTop: 30 }}
        >
          {this.getLightState() }
        </div>
      </div>
    );
  }
}

export default ToggleLightButton;
