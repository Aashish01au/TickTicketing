import React from 'react'
import CatData from '../Data/CatData'
import { Link } from 'react-router-dom'


function Details() {
  let data=CatData.find((a)=>a.id)
  return (
    <>
    <div className="container p-2">
      <div className="row">
     <div className="col-4">
<img src={data.Poster} alt="" />
     </div>
      <div className="col-8 text-light">
    <h2 className='fw-bold'>Actors:  {data.Actors}</h2>
    <p>Awards: {data.Awards}</p>
    <p>BoxOffice: {data.BoxOffice}</p>
    <p>Country: {data.Country}</p>
    <Link to={`/payment`} className='btn btn-danger' > Confirm & Play</Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default Details