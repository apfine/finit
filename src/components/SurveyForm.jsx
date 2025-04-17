import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SurveyForm.css';

function Survey() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, rating, message } = formData;

    if (!name || !email || !rating || !message) {
      alert('Please complete all fields before submitting your insights.');
      return;
    }

    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5.');
      return;
    }

    alert('Your insights have been securely recorded. Thank you!');
    navigate('/');
  };

  return (
    <div className="survey-wrapper">
      <h1 className="survey-heading">FINTECH INSIGHTS SURVEY</h1>
      <p className="survey-subtext">Help us understand how high-tech societies engage with finance, innovation, and technology.</p>

      <form className="survey-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name" className="field-label">Your Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="field-input"
            placeholder="Alex Quantum"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="field-label">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="field-input"
            placeholder="you@fintechverse.ai"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="rating" className="field-label">Experience Rating (1 = Low, 5 = Exceptional)</label>
          <input
            id="rating"
            name="rating"
            type="number"
            className="field-input"
            placeholder="1 to 5"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message" className="field-label">Your Vision for the Future of Finance</label>
          <textarea
            id="message"
            name="message"
            className="field-textarea"
            placeholder="Share your predictions, insights, or suggestions..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Launch Submission
        </button>
      </form>
    </div>
  );
}

export default Survey;
