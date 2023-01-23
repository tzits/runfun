import React, { Component } from 'react'
import './App.css'
import Men from './components/Men'
import Women from './components/Women'
import MastersWomen from './components/MastersWomen'
import Grandmasters from './components/Grandmasters'
import Entry from './components/Entry'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom'

class App extends Component {

  render() {
    return(
      <div className="App">
      <BrowserRouter>
        <div>
          <div className='nav'>
            <span className='nav_item'><Link to='/'>Home</Link></span>
            <span className='nav_item'><Link to='/men'>Men</Link></span>
            <span className='nav_item'><Link to='/women'>Women</Link></span>
            <span className='nav_item'><Link to='/mwomen'>Masters Women</Link></span>
            <span className='nav_item'><Link to='/gmen'>Grandmasters</Link></span>
          </div>

          <hr />

          <Routes>
            <Route path='/' element={<Entry />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/mwomen' element={<MastersWomen />} />
            <Route path='/gmen' element={<Grandmasters />} />
          </Routes>

        </div>
        <Outlet />
      </BrowserRouter>



      </div>

    )
  }
}





export default App;
