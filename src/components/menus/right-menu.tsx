import { Component } from "react";

import '../../assets/sass/right-menu.sass';

import ToggleLightButton from "../buttons/toggle-light-button";

class RightMenu extends Component {
  render() {
    return (
      <div id="right-menu">
        <ToggleLightButton />
      </div>
    );
  }
}

export default RightMenu;
