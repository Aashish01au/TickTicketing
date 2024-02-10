import React from 'react'
import ConcertsData from '../Data/ConcertsData'
function Block2() {
  return (
    <> 
{/* =================================  Concertz  ======================================================= */}
<div className="container py-5">
  <div className="row m-2">
    <h2 className='fw-bold text-light text-uppercase'>Concerts :</h2>
{ConcertsData.map((c)=>(
 <div className="col-3">
 <div className="card box border-danger p-2 shadow">
  <img src={c.Poster} className='w-100 card' alt="" />
<p>{c.Director}</p>
 </div>
</div>
))}  
  </div>
</div>
    </>
  )
}

export default Block2