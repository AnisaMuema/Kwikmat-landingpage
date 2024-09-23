import React from 'react';
import '../App.css'

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        {/* <div className="section-header text-center pb-5">
          <h2>Our Services</h2>
          <p>What we offer</p>
        </div> */}
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-block text-center  pb-2">
              <div className="service-body">
              <img className='clock' src='/Icons/clock.jpg' alt='clock Icon'style={{ width: '50px', height: '50px' }}/>
                <h3 className="service-title">Faster Than Ever!</h3>
                <p className="lead">With our cutting edge technology enjoy delivery of your parcels anywhere in Nairobi in under 90 minutes.</p>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
            </div>
          </div>

          <hr className="service-divider d-lg-none" /> {/* Divider for small screens */}

          <div className="col-lg-4 col-md-6">
            <div className="service-block text-center  pb-2">
              <div className="service-body">
              <img className='piggyBank' src='/Icons/piggybank.jpg' alt='Piggybank Icon'style={{ width: '50px', height: '50px' }}/>
                <h3 className="service-title">Affordable By Design</h3>
                <p className="lead">60% cheaper, 100% reliable. No extra fees, just reliable services</p>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
            </div>
          </div>

          <hr className="service-divider d-lg-none" /> {/* Divider for small screens */}

          <div className="col-lg-4 col-md-6">
            <div className="service-block text-center  pb-2">
              <div className="service-body">
              <img className='scooter' src='/Icons/scootericon.jpg' alt='Piggybank Icon'style={{ width: '50px', height: '50px' }}/>
                <h3 className="service-title">Last-Mile Simplified</h3>
                <p className="lead">Our electric scooters and motorbikes close the loop, bringing parcels to your doorsteps with zero emmision. </p>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
            </div>
          </div>

          <hr className="service-divider d-lg-none" /> {/* Divider for small screens */}

        <div className='builtForBusiness' style={{marginLeft: '770px'}}>
          <div className="col-lg-4 col-md-6 ">
            <div className="service-block text-center  pb-2">
              <div className="service-body">
              <img className='caringicon' src='/Icons/caringicon.jpg' alt='caring Icon'style={{ width: '50px', height: '50px' }}/>
                <h3 className="service-title">Built For Businesses, Loved By Everyone</h3>
                <p className="lead">From local sellers, to enterprise businesses, GoMa3 makes it easier to reach customers anywhere in Kenya.</p>
              </div>
            </div>
          </div>
        </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Services;
