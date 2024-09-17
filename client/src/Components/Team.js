import React from 'react';

const Team = () => {
  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Team</h2>
              <p>Meet the visionary leaders driving KwikMat forward.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Team Member 1 */}
          <div className="col">
            <div className="card">
              <img src="path-to-image1.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Founder and C.E.O</h5>
                <p className="card-text">
                  Craig Omondi drives KwikMat's marketing strategy, bringing a wealth of experience in brand management
                  and digital marketing. His innovative campaigns have been key to building KwikMat's presence in Nairobi
                  and connecting us with businesses and individuals across the city.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col">
            <div className="card">
              <img src="path-to-image2.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Technical Co-founder</h5>
                <p className="card-text">
                  Anisa Muema is the mastermind behind KwikMat's cutting-edge logistics technology. With a strong
                  background in software engineering and systems architecture, she ensures that our platform is both
                  robust and innovative, allowing us to deliver the most efficient service possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
