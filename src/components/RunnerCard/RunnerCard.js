import React from 'react'
import './RunnerCard.styles.css'

const RunnerCard = ({dataPoint}) => {
    return (
      <div className='result-container'>
        <span className='card'>{dataPoint.name}: {dataPoint.score}</span>
      </div>  
    )
}

export default RunnerCard