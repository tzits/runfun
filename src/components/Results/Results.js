import React from 'react'
import Schedule from '../Schedule'
import RunnerCard from '../RunnerCard/RunnerCard'
import './Results.styles.css'

const Results = ({team}) => {
  console.log(team)
  let testData = {
    men:
    [
      {
        name: 'Toby',
        score: 4
      }, 
      {
        name: 'Jay',
        score: 10
      },
      {
        name: 'Ryan',
        score: 8
      },
      {
        name: 'Pablo',
        score: 6
      },
      {
        name: 'James',
        score: 2
      }
    ],
    women:
    [
      {
        name: 'Kaitlyn',
        score: 4
      }, 
      {
        name: 'Becca',
        score: 10
      },
      {
        name: 'Marie',
        score: 8
      },
      {
        name: 'Gabby',
        score: 6
      },
      {
        name: 'Anna Hope',
        score: 2
      }
    ]
  }
  
  return (
    <div className='results-schedule-container'>
      <div className='results'>
        {
          testData[team].sort((a,b) => a.score < b.score).map((runner) => 
            <a href='#'><RunnerCard dataPoint={runner} /></a>
          )
        }
      </div>
      <Schedule />
    </div>
    )
}

export default Results