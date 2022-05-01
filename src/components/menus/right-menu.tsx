import { Component } from "react";

import '../../assets/sass/right-menu.sass';

import ToggleLightButton from "../buttons/toggle-light-button";
import ChooseLanguage from "./language";

class RightMenu extends Component {
  render() {
    return (
      <div id="right-menu">
        <ToggleLightButton />

        <ChooseLanguage />
      </div>
    );
  }
}

export default RightMenu;
