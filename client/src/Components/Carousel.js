import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/home-1.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5>Affordable Convenience</h5>
            <p> Transforming everyday commutes into efficient logistic solutions</p>
            <a href="#" className="btn btn-warning mt-3">Learn More</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/home-2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5>Your Parcel, Our Priority</h5>
            <a href="#" className="btn btn-warning mt-3">Learn More</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/home-3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5>Send, Track, Relax</h5>
            
            <a href="#" className="btn btn-warning mt-3">Learn More</a>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
