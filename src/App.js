import './App.css';
import './Assets/css/theme.css'
import './Components/Header/Header.css'

import React, { Component } from 'react'

import MainRouter from './MainRouter';

// Should use styled components, theme-based design system or atleast SASS.
// Should handle secret keys in .env file not in key.js
export default class App extends Component {
  render() {
    
    return (
      <MainRouter/>
    )
  }
}


