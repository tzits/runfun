import React from 'react'
import './Race.styles.css'


const Race = ({race}) => {
    return (
        <tr>
            <td className='name'>{race.name}</td>
            <td className='date'>{race.date}</td>
            <td className='distance'>{race.distance}</td>
            <td className='location'>{race.location}</td>
            <td className='link'><a href={race.registrationLink} target="_blank">Click Here</a></td>
        </tr>
    )
}

export default Race