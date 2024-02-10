import React from 'react'
import CatData from '../Data/CatData'
import ConcertsData from '../Data/ConcertsData'
import Block1 from './Block1'
import Block2 from './Block2'

function Home() {
  return (
    <>
<div className="home">
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
     
      <img src="https://wallpapers.com/images/high/avengers-endgame-hubynr5uzeo5e89b.webp" className="w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Ajit Sings</h5>
        <p>Concerts in Mumbai feb 20 2024 </p>
      </div>
    </div>
    <div className="carousel-item">
    <img  src="https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg" className="w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Block1/>
<Block2/>
</div>
    </>
  )
}

export default Home