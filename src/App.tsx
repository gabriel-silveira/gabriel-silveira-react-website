import { Component } from 'react';

import './assets/sass/general.sass';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// layout
import Layout from './components/layout';

// pages
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div id="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
