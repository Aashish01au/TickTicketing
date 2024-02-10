import React from 'react'
import CatData from '../Data/CatData'
import { Link } from 'react-router-dom'
function Block1() {
  return (
    <>    
{/* ===============================  Movies ============================================ */}
<div className="container py-5 ">
      <div className="row m-2 ">
        <h2 className='fw-bold text-light text-uppercase '>Movies :</h2>
        {CatData.slice(0,4).map((a)=>(
          <div className="col">
          <div className="box card border-danger gap-3 p-2 shadow">
            <img className='w-100 card' src={a.Poster} alt="" />
          <p className='fw-bold'>Movie Name: {a.Title}</p>
          <p>Actor: {a.Actors}</p>
          <Link to={`/details`} className='btn btn-danger' > BUY NOW</Link>
          </div>
         </div>
        ))}
       
      </div>
    </div>
    </>
  )
}

export default Block1