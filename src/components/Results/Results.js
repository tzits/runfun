import React from 'react'
import Schedule from '../Schedule/Schedule'
import RunnerCard from '../RunnerCard/RunnerCard'
import './Results.styles.css'
import { startingResults } from '../../utils/data'

const Results = ({team}) => {
  let testData = startingResults
  
  return (
    <div className='results-schedule-container'>
      <div className='results'>
          <h4 className='results-header'>Team Points</h4>
          <div className='card-container'>
          {
            testData[team].sort((a,b) => a.score < b.score).map((runner) => 
              <a className='runnerCard' href='#'><RunnerCard dataPoint={runner} /></a>
            )
          }
          </div>
      </div>
      <Schedule />
    </div>
  )
}

export default Results
