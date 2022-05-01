import { Component } from "react";

import '../../assets/sass/toggle-light-button.sass';

type ToggleLightButtonProps = {}

type ToggleLightButtonType = {
  light: 'on' | 'off',
}

class ToggleLightButton extends Component<ToggleLightButtonProps, ToggleLightButtonType> {
  state: ToggleLightButtonType = {
    light: 'off',
  }

  toggleLight = () => {
    console.log(this.state);
    this.setState({
      light: this.state.light === 'on' ? 'off' : 'on',
    });
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="toggle-light-button-wrapper"
        onClick={this.toggleLight}
      >
        <label className="toggle-light-button">
          <input type="checkbox" />

          <div className="switch">
            <div />
            <div />
            <span />
          </div>
        </label>

        <div
          style={{ marginTop: 25 }}
        >
          Dark ({this.state.light})
        </div>
      </div>
    );
  }
}

export default ToggleLightButton;
