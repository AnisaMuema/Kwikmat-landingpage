import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        alert(response.data.message);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => console.error('Error submitting form', error));
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header text-center pb-5">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
              </div>
              <button className="btn btn-warning btn-lg btn-block mt-3">Send Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
