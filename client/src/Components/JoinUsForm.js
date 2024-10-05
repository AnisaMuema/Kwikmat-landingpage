import React, { useState } from 'react';
import '../App.css'; // Import the external CSS

const JoinUsForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        idNumber: '',
        phoneNumber: '',
        email: '',
        stage: '',
        route: '',
        registrationNumber: '',
        licenseNumber: '',
        experienceYears: '',
        saccoName: '',
        capacity: '',
        operatingDays: [],
        operatingHours: '',
        additionalInfo: '',
        confirmDetails: false,
        agreeToTerms: false
    });

    const stages = ['Stage 1', 'Stage 2', 'Stage 3']; // Add your matatu stages here
    const routes = ['CBD to Rongai', 'CBD to Thika', 'CBD to Westlands']; // Add matatu routes here
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'confirmDetails' || name === 'agreeToTerms') {
                setFormData({ ...formData, [name]: checked });
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    operatingDays: checked
                        ? [...prevData.operatingDays, value]
                        : prevData.operatingDays.filter(day => day !== value)
                }));
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.confirmDetails || !formData.agreeToTerms) {
            alert("Please confirm all details and agree to the terms and conditions.");
            return;
        }

        console.log(formData); // Handle form submission logic
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Join US</h1>
            <div className="form-group">
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>ID Number:</label>
                <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Email Address:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Matatu Stage/Bus Terminus:</label>
                <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Stage</option>
                    {stages.map((stage, index) => (
                        <option key={index} value={stage}>
                            {stage}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Route:</label>
                <select
                    name="route"
                    value={formData.route}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Route</option>
                    {routes.map((route, index) => (
                        <option key={index} value={route}>
                            {route}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Motor Vehicle Registration Number:</label>
                <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Driver License Number:</label>
                <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Years of Experience:</label>
                <input
                    type="number"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Matatu SACCO Name (if applicable):</label>
                <input
                    type="text"
                    name="saccoName"
                    value={formData.saccoName}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Matatu Capacity (Number of Seats):</label>
                <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Operating Days:</label>
                {days.map((day, index) => (
                    <div key={index} className="checkbox-group">
                        <input
                            type="checkbox"
                            name="operatingDays"
                            value={day}
                            checked={formData.operatingDays.includes(day)}
                            onChange={handleChange}
                        />
                        <label className="checkbox-label">{day}</label>
                    </div>
                ))}
            </div>

            <div className="form-group">
                <label>Operating Hours (from - to):</label>
                <input
                    type="text"
                    name="operatingHours"
                    value={formData.operatingHours}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Any Additional Information/Comments:</label>
                <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                />
            </div>

            {/* Agreement Section */}
            <div className="form-group checkbox-group">
                <input
                    type="checkbox"
                    name="confirmDetails"
                    checked={formData.confirmDetails}
                    onChange={handleChange}
                    required
                />
                <label className="checkbox-label">
                    I confirm that all the details provided are accurate to the best of my knowledge.
                </label>
            </div>

            <div className="form-group checkbox-group">
                <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                />
                <label className="checkbox-label">
                    I agree to GoMa3’s terms and conditions.
                </label>
            </div>

            <button type="submit" className="submit-button">Join GoMa3</button>
        </form>
    );
};

export default JoinUsForm;
