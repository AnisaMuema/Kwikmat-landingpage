import React from 'react';
import '../App.css'


const About = () => {
  return (
    <section id="About" className="about section-padding">
      <div className="container">
        <div className="section-header text-center pb-5">
          {/* <h2>About Us</h2> */}
          
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card custom-card pb-2">
              <div className="card-body">
                
                <h3 className="card-title">What We Do</h3>
                <br></br>
                <p className="lead">At GoMa3,we're redefining urban logistics by transforming Africa's vibrant public transport system into an efficient, cost effective delivery network. We seamlessly integrate the speed and reach of matatus with cutting edge technology to deliver your parcels across the city-faster, smarter and more affordably. From businesses to individuals we're making deliveries simpler! 
</p>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
              {/* <i class="bi bi-5-circle"></i>
            <p>Upto 5Kgs</p> */}
            </div>
            
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card custom-card pb-2">
              <div className="card-body">
                
                <h3 className="card-title">Why We Matter</h3>
                <br></br>
                <p className="lead">Africa’s cities are growing fast, but delivery costs shouldn’t. By leveraging the existing transport infrastructure, we provide a solution that cuts costs by up to 60% while opening doors for small businesses and creating real economic opportunities for drivers. This isn’t just about convenience; it’s about accessibility and creating a system that works for everyone—from small businesses to large enterprises, and from customers to drivers.
</p>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
              {/* <i class="bi bi-geo-alt-fill"></i>
            <p>Live Tracking and Receipts</p> */}
            </div>
            
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card custom-card pb-2">
              <div className="card-body">
                
                <h3 className="card-title">Our Mission</h3>
                <br></br>
                <p className="lead">We're on a mission to reinvent urban mobility in order to drive a new era of sustainable, scalable logistics in African cities. We're committed to building a future where technology empowers communities, reduces congestion and makes fast, affordable deliveries possible for all.
Together, we're creating cities that move at the speed of their people. This is how we build the future. </p>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
              {/* <i class="bi bi-clock"></i>
            <p>Get Your Time Back! </p> */}
            </div>
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
