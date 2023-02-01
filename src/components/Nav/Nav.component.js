import React, {Component} from 'react'
import {
    Routes,
    Route,
    Link,
  } from 'react-router-dom'
import Results from '../Results/Results'
import './Nav.styles.css'

class Nav extends Component {
    componentDidMount() {
        const triggers = document.querySelectorAll('.cool-list')
        const background = document.querySelector('.dropdownBackground')
        const nav = document.querySelector('.top')
    
        triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
        triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
    
        function handleEnter() {
          this.classList.add('trigger-enter')
          setTimeout(() => this.classList.add('trigger-enter-active'), 150)
          background.classList.add('open')
    
          const dropdown = this.querySelector('.dropdown')
          const dropdownCoords = dropdown.getBoundingClientRect()
          const navCoords = nav.getBoundingClientRect()
    
          const coords = {
            height: dropdownCoords.height,
            width: dropdownCoords.width,
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left,
          };
    
          background.style.setProperty('width', `${coords.width}px`)
          background.style.setProperty('height', `${coords.height}px`)
          background.style.setProperty('left', `${coords.left}px`)
          background.style.setProperty('top', `${coords.top}px`)
        }
    
        function handleLeave() {
          this.classList.remove('trigger-enter', 'trigger-enter-active')
          background.classList.remove('open')
          
        }
    
    }

    render() {
        return (       
            <div>
                <nav>

                    <div className='top'>
                        <div className="dropdownBackground">
                            <span className='arrow'></span>
                        </div>
                        <ul className='cool-container'>
                            <span className='cool left'>
                                <li className='uncool-list'>
                                    <span className='nav-link'><Link className='link' to='/'>LC Home</Link></span>
                                </li>
                                <li className='cool-list'>                
                                <a className='header-link' href='#'>Men</a>
                                    <ul className='dropdown men'>
                                    <li><Link className='result-link' to='/men'>Open</Link></li>
                                    <li><Link className='result-link' to='/mmen'>Masters</Link></li>
                                    <li><Link className='result-link' to='/gmen'>Grandmasters</Link></li>
                                    </ul>
                                </li>
                                <li className='cool-list'>
                                    <a className='header-link' href='#'>Women</a>                   
                                    <ul className='dropdown men'>
                                    <li><Link className='result-link' to='/women'>Open</Link></li>
                                    <li><Link className='result-link' to='/mwomen'>Masters</Link></li>
                                    <li><Link className='result-link' to='/gwomen'>Grandmasters</Link></li>
                                    </ul>
                                </li>
                            </span>
                            <span className='right'>
                                <li className='uncool-list left'>
                                    <a className='header-link' href='https://www.northbrooklynrunners.com'><span>NBR</span></a>
                                </li>
                            </span>
                        </ul>
                    </div>

                    <Routes>
                        <Route path='/' element={<Results team={'men' />} />
                        <Route path='/men' element={<Results team={'men'} />} />
                        <Route path='/mmen' element={<Results team={'mmen'} />} />
                        <Route path='/women' element={<Results team={'women'}/>} />
                        <Route path='/mwomen' element={<Results team={'masters_women'}/>} />
                        <Route path='/gmen' element={<Results team={'gmen'}/>} />
                        <Route path='/gwomen' element={<Results team={'grandmasters_women'}/>} />
                    </Routes>
                </nav>
            </div>
        )
    }
}

export default Nav
