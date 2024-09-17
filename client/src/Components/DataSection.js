import React from 'react';

const DataSection = () => {
  return (
    <section id="data" className="data section-padding">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Team</h2>
              <p>Meet the visionary leaders driving KwikMat forward.</p>
            </div>
          </div> */}
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* data set1 */}
          <div className="col">
            <div className="data-card">
              <div className="card-body">
                <h5 className="card-title">2,202,505</h5>
                <p className="card-text">
                  Number of bus trips avoided.
                </p>
              </div>
            </div>
          </div>

          {/* data set2 */}
          
          <div className="col">
            <div className="data-card">
              <div className="card-body">
                <h5 className="card-title">14,602T</h5>
                <p className="card-text">
                  CO2 emmisions avoided in metric tonnes.
                </p>
              </div>
            </div>
          </div>
          {/* data set3 */}
          <div className="col">
            <div className="data-card">
              <div className="card-body">
                <h5 className="card-title">60%</h5>
                <p className="card-text">
                  How much users expect to saved as opposed to other delivery option.
                </p>
              </div>
            </div>
          </div>
          
          {/* data set4 */}
          <div className="col">
            <div className="data-card">
              <div className="card-body">
                <h5 className="card-title">2hrs</h5>
                <p className="card-text">
                  Number of hours commuters spend on the road each day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
