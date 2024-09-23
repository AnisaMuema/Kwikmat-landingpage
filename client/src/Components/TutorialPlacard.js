import React from 'react'
import '../App.css';

const TutorialPlacard = ({ title, description, backgroundColor, textColor }) => {
    return (
        <div class="card">
        
        <div class="card-body">
          <blockquote class="blockquote mb-3">
          <div className="col-lg-4 col-md-6">
            <div className="card custom-card pb-2">
                <i className="bi bi-5-circle"></i>
                <p>Upto 5 kgs</p>
            </div>
            <div className="card custom-card pb-2">
                <i className="bi bi-5-circle"></i>
                <p>Upto 10 kgs</p>
            </div>
      {/* Add more icon containers as needed */}
    </div>
          </blockquote>
        </div>
      </div>
    );
  }

export default TutorialPlacard
