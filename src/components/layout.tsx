import { Component } from 'react';

import { Outlet } from "react-router-dom";

import RightMenu from "./menus/right-menu";

class Layout extends Component {
  render() {
    return (
      <div id="layout">
        <RightMenu />

        <div id="page-content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Layout;
