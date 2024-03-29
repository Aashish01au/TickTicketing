import React from 'react'
import CatData from '../Data/CatData'

function Payment() {
  let data=CatData.find((a)=>a.id)
  return (
    <>
 <div className="box p-5">
 <div className="container ">
      <div className="row ">
        <div className="col-4 py-3">
          <img src={data.Poster} alt="" />
          <p>Actors: {data.Actors}</p>
          <p>Language: {data.Language}</p>
          <p>Country: {data.Country}</p>
        </div>

        {/*========================= card form =======================*/}
     <div className="col-8">
     <div className="card px-4">
      <p className="h8 py-3">Payment Details</p>
      <div className="row gx-3">
        <div className="col-12">
          <div className="d-flex flex-column">
            <p className="text mb-1">Person Name</p>
            <input className="form-control mb-3" type="text" placeholder="Name" defaultValue="Barry Allen" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex flex-column">
            <p className="text mb-1">Card Number</p>
            <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column">
            <p className="text mb-1">Expiry</p>
            <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column">
            <p className="text mb-1">CVV/CVC</p>
            <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
          </div>
        </div>
        <div className="col-12">
          <div className="btn btn-primary mb-3">
            <span className="ps-3">Pay $243</span>
            <span className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
     </div>

      </div>
    </div>
 </div>
    </>
  )
}

export default Payment