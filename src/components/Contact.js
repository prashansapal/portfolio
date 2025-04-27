import React, { useState } from 'react';

function Contact() {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/mblolzgy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>Feel free to reach out for opportunities or collaborations!</p>
        <div className="contact-info">
          <p>📧 prashansapal19@gmail.com</p>
          <p>🔗 <a href="https://www.linkedin.com/in/prashansa-pal-3bb35a247/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>📱 9518354253</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              rows="5" 
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={submitStatus === 'sending'}>
            {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="error-message">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;