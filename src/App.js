import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter,
  Outlet,
} from 'react-router-dom'
import Nav from './components/Nav/Nav.component'

class App extends Component {

  render() {

    return(
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Outlet />
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
