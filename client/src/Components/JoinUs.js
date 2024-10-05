import React from 'react'

const JoinUs = () => {
  return (
    <section id="joinUs" className="JoinUs section-padding">
        <h3>Unlocking opportunities for couriers and businesses</h3>
        <br></br>
      <div className="container">
        {/* <div className="section-header text-center pb-5">
          <h2>Our Services</h2>
          <p>What we offer</p>
        </div> */}
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="JoinUs-block text-center  pb-2">
              <div className="JoinUs-body">
                <h3 className="JoinUs-title">SignUp to GoMa3 and get paid</h3>
                <ul>
                    <li>Make money delivering parcels</li>
                    <li>Receive your pay within 24hrs</li>
                    <li>Deliver your way: matatu, motorbike or scooter</li>
                </ul>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
            </div>
          </div>

          <hr className="JoinUs-divider d-lg-none" /> {/* Divider for small screens */}

          <div className="col-lg-4 col-md-6">
            <div className="JoinUs-block text-center  pb-2">
              <div className="JoinUs-body">
                <img></img>
                <button>Join as driver</button>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
            </div>
          </div>

          <hr className="JoinUs-divider d-lg-none" /> {/* Divider for small screens */}

          <div className="col-lg-4 col-md-6">
            <div className="JoinUs-block text-center  pb-2">
              <div className="JoinUs-body">
                <img></img>
                <button>Join as courier</button>
                {/* <a href="#" className="btn btn-warning">Read More</a> */}
              </div>
            </div>
          </div>

          <hr className="JoinUs-divider d-lg-none" /> {/* Divider for small screens */}
          
          
        </div>
      </div>
    </section>
  )
}

export default JoinUs