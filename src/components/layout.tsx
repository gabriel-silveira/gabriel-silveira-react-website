import { Component } from 'react';
import { Outlet } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div id="layout">
        <Outlet />
      </div>
    );
  }
}

export default Layout;
