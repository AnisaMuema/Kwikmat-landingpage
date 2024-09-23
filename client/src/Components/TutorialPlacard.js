import React from 'react'
import '../App.css';

const TutorialPlacard = ({ title, description, backgroundColor, textColor }) => {
    return (
      <div class="row">
        <div class="col-sm-4" >
          <div class="card">
            <div class="card-body">
            <i class="bi bi-5-circle"></i>
              <p class="card-text">Upto 5 KGs</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <i class="bi bi-geo-alt"></i>
              <p class="card-text">Live Tracking and Receipts.</p>
              
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
            <i class="bi bi-stopwatch" ></i>
              <p class="card-text">Get your time back.</p>
              
            </div>
          </div>
        </div>
        <hr></hr>
        <hr></hr>
      </div>
    );
  }

export default TutorialPlacard
