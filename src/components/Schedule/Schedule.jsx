import React from 'react'
import { pointRaces } from '../../utils/data'
import Race from '../Race/Race.component'
import './Schedule.styles.css'

const Schedule = () => {
    return (
        <div className='schedule'>
            <table>
                <tr>
                    <th>RACE</th>
                    <th>DATE</th>
                    <th>DIST</th>
                    <th>LOCATION</th>
                    <th>REGISTER</th>
                </tr>
                {
                    pointRaces.map((race) => 
                        <Race race={race} />
                    )
                }
            </table>
        </div>
    )
   
}

export default Schedule