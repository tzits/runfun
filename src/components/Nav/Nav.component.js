import React, {Component} from 'react'
import {
    Routes,
    Route,
    Link,
  } from 'react-router-dom'
import Results from '../Results/Results'
import Entry from '../Entry'

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

                        <ul className='cool'>
                            <li className='cool-list'>                
                            <a href='#'>Men</a>
                                <ul className='dropdown men'>
                                <li><Link to='/men'>Open</Link></li>
                                <li>Masters</li>
                                <li><Link to='/gmen'>Grandmasters</Link></li>
                                </ul>
                            </li>
                            <li className='cool-list'>
                                <a href='#'>Women</a>                   
                                <ul className='dropdown men'>
                                <li><Link to='/women'>Open</Link></li>
                                <li><Link to='/mwomen'>Masters</Link></li>
                                <li>Grandmasters</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <Routes>
                        <Route path='/' element={<Entry />} />
                        <Route path='/men' element={<Results team={'men'} />} />
                        <Route path='/women' element={<Results team={'women'}/>} />
                        <Route path='/mwomen' element={<Results team={'masters_women'}/>} />
                        <Route path='/gmen' element={<Results team={'grandmasters_men'}/>} />
                    </Routes>
                </nav>
            </div>
        )
    }
}

export default Nav