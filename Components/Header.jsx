import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Concerts from '../src/Pages/Concerts'
import Movies from '../src/Pages/Movies'
import Threater from '../src/Pages/Threater'
import Home from '../src/Pages/Home'
import Details from '../src/Pages/Details'
import Payment from '../src/Pages/Payment'


function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary navbg text-light sticky-bottom bg-body-tertiary"  >
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand text-light fw-bold" href="#">TickTicketing</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to={`/concerts`}>Concerts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to={`/movies`}>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to={`/threater`}>Threater Events</Link>
        </li>
      </ul>
      <form className="d-flex gap-3 " >
     <div className='text-center'> <h6 className='text-light'>  </h6>Login</div>
      
     <div> <button className="btn btn-danger" type="submit">Register</button></div>
      </form>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/concerts' element={<Concerts/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/threater' element={<Threater/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/payment' element={<Payment/>}/>
</Routes>

    </>
  )
}

export default Header