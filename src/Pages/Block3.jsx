import React from 'react'
import Demo from '../Data/Demo'

function Block3() {
    
  return (
    <>
    <div className="container">
        <div className="row">
{Demo.map((a)=>(
    <div className="col box">
        <p>{a.Title}</p>
    </div>
))}
        </div>
    </div>
    </>
  )
}

export default Block3